/*
 * MIT License
 *
 * Copyright (c) 2021 schulterklopfer/__escapee__
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILIT * Y, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, {useState, useRef, useEffect, useCallback} from 'react';
import {useAnimation} from 'react-native-animation-hooks';
import {
  Image,
  View,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import {localStyles} from '../localStyles';
import {ViroARSceneNavigator} from 'react-viro';
import ARInitializationUI from '../component/ARInitializationUI';
import ARView from './ARView';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {featureCollection as makeFeatureCollection} from '@turf/helpers';

import {useDispatch, useSelector} from 'react-redux';
import {findAreas} from '../redux/dispatch';
import {
  getDeviceGeoLocation as getGeoLocationSelector,
  getAreas as getAreasSelector,
  getHeaderMenuIsVisible as getHeaderMenuIsVisibleSelector,
  getAreasChangedAt as getAreasChangedAtSelector,
  getNotification as getNotificationSelector,
  getItemsChangedAt as getItemsChangedAtSelector,
} from '../redux/selectors';
import bitcoinIcon from '../res/bitcoin_icon_sm.png';
import {
  setARCameraPosition,
  setAreaClientState,
  setDeviceGeoLocation,
} from '../redux/actions';
import circle from '@turf/circle';
import requestPermissions from '../helpers/requestPermissions';
import {distance} from '../helpers/distance';
import {
  AREA_CLIENT_STATE_ACTIVE,
  AREA_CLIENT_STATE_NONE,
  MIN_AREA_CENTER_DISTANCE,
  AREA_FIND_RADIUS,
} from '../globals';
import Sound from 'react-native-sound';
import showCoinsSound from '../res/smb3_show_coins.wav';
import noActiveAreaSound from '../res/noActiveArea.wav';

import lockOpen from '../res/lock_open.png';
import lockClosed from '../res/lock_closed.png';

import TextStroke from '../component/TextStroke';
import {mapboxAccessToken} from '../config';

const styles = {
  icon: {
    iconImage: bitcoinIcon,
    iconAllowOverlap: true,
  },
  circle: {
    fillColor: '#fff',
    fillOpacity: 0.25,
  },
  circleActive: {
    fillColor: '#2f2',
    fillOpacity: 0.5,
    fillOutlineColor: '#fff',
  },
};

const GameView = () => {
  const dispatch = useDispatch();
  const [permissionsGranted, setPermissionsGranted] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(18);
  const [pitch, setPitch] = useState(0);
  const [minDelta, setMinDelta] = useState(0);
  const [activeAreas, setActiveAreas] = useState(0);
  const [areaCount, setAreaCount] = useState(0);
  const [mapIsLocked, setMapIsLocked] = useState(true);

  const lastLocationUpdate = useRef(0);

  const geoLocation = useSelector(getGeoLocationSelector);
  const areas = useSelector(getAreasSelector);
  const areasChangedAt = useSelector(getAreasChangedAtSelector);
  const itemsChangedAt = useSelector(getItemsChangedAtSelector);
  const headerMenuIsVisible = useSelector(getHeaderMenuIsVisibleSelector);
  const notification = useSelector(getNotificationSelector);

  const cameraRef = useRef(null);

  const showCoinsSoundRef = useRef(
    new Sound(showCoinsSound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log(error);
      }
    }),
  );

  const noActiveAreaSoundRef = useRef(
    new Sound(noActiveAreaSound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log(error);
      }
    }),
  );

  const [featureCollection, setFeatureCollection] = useState(
    makeFeatureCollection([]),
  );

  const animatedMapBorderRadius = useAnimation({
    delay: 500,
    type: 'timing',
    duration: 750,
    useNativeDriver: false,
    toValue:
      activeAreas === 0 ? 0 : localStyles.mapContainer.borderTopLeftRadius,
    easing: Easing.out(Easing.quad),
  });

  const animatedMapHeight = useAnimation({
    delay: 500,
    type: 'timing',
    duration: 750,
    useNativeDriver: false,
    toValue:
      activeAreas === 0
        ? Dimensions.get('window').height - 50
        : localStyles.mapContainer.height,
    easing: Easing.out(Easing.quad),
  });

  const throttleLocationUpdate = useCallback(
    (location) => {
      const now = new Date().getTime();
      // every second
      if (now - lastLocationUpdate.current > 1000) {
        dispatch(setDeviceGeoLocation(location.coords));
        lastLocationUpdate.current = now;
      }
    },
    [dispatch, lastLocationUpdate],
  );

  useEffect(() => {
    console.log('------------> Areas changed at ' + areasChangedAt);
  }, [areasChangedAt]);

  useEffect(() => {
    console.log('------------> Items changed at ' + itemsChangedAt);
  }, [itemsChangedAt]);

  useEffect(() => {
    setAreaCount(Object.keys(areas).length);
  }, [areasChangedAt]);

  useEffect(() => {
    (async () => {
      try {
        const granted = await requestPermissions();
        setPermissionsGranted(granted);
        console.log('Permissions granted?', granted);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (activeAreas === 0) {
      setPitch(0);
      setZoomLevel(18);
      dispatch(setARCameraPosition([0, 0, 0]));
      showCoinsSoundRef.current.play();
    } else {
      setPitch(45);
      setZoomLevel(18);
      noActiveAreaSoundRef.current.play();
    }
  }, [dispatch, activeAreas]);

  useEffect(() => {
    if (!geoLocation) {
      return;
    }
    const areaHashes = [];
    for (const areaHash in areas) {
      areaHashes.push(areaHash);
    }
    dispatch(
      findAreas(
        geoLocation.longitude,
        geoLocation.latitude,
        AREA_FIND_RADIUS,
        areaHashes,
      ),
    );
  }, [dispatch, geoLocation]);

  useEffect(() => {
    // check if near center of area.
    if (!geoLocation) {
      return;
    }
    let md = Number.MAX_VALUE;
    for (const areaHash in areas) {
      if (!areas.hasOwnProperty(areaHash)) {
        continue;
      }
      const area = areas[areaHash];

      const areaLocation = {
        longitude: area.lon,
        latitude: area.lat,
      };

      const delta = distance(geoLocation, areaLocation, 'M');

      md = Math.min(delta, md);

      if (delta < MIN_AREA_CENTER_DISTANCE) {
        if (
          (area._clientState & AREA_CLIENT_STATE_ACTIVE) !==
          AREA_CLIENT_STATE_ACTIVE
        ) {
          console.log('area is active', areaHash, delta);
          dispatch(
            setAreaClientState(areaHash, AREA_CLIENT_STATE_ACTIVE, 'set'),
          );
        }
      } else if (delta > area.radius + MIN_AREA_CENTER_DISTANCE + 1) {
        if (area._clientState !== 0) {
          console.log('area is no longer active', areaHash, delta);
          dispatch(
            setAreaClientState(areaHash, AREA_CLIENT_STATE_NONE, 'overwrite'),
          );
        }
      }
    }
    setMinDelta(md);
  }, [areaCount, dispatch, geoLocation]);

  useEffect(() => {
    let aa = 0;
    for (const areaHash in areas) {
      if (!areas.hasOwnProperty(areaHash)) {
        continue;
      }
      const area = areas[areaHash];
      // is active?
      if (
        (area._clientState & AREA_CLIENT_STATE_ACTIVE) !==
        AREA_CLIENT_STATE_ACTIVE
      ) {
        continue;
      }

      // has items?
      if (!area.items || !Object.keys(area.items).length) {
        continue;
      }
      aa++;
    }
    setActiveAreas(aa);
  }, [areasChangedAt, itemsChangedAt]);

  useEffect(() => {
    let features = [];
    for (const areaHash in areas) {
      if (!areas.hasOwnProperty(areaHash)) {
        continue;
      }
      const area = areas[areaHash];

      // dont show when there are no collectible items
      if (!area.items || !Object.keys(area.items).length) {
        continue;
      }

      const c = circle([area.lon, area.lat], area.radius, {
        steps: 16,
        units: 'meters',
      });
      c.id = area.hash;
      c.properties = {
        active:
          (area._clientState & AREA_CLIENT_STATE_ACTIVE) ===
          AREA_CLIENT_STATE_ACTIVE
            ? 't'
            : 'f',
      };
      features.push(c);
    }
    setFeatureCollection(makeFeatureCollection(features));
  }, [areasChangedAt, itemsChangedAt]);

  return (
    <View style={{...localStyles.flex}}>
      {!!activeAreas && (
        <View style={{flex: 1}}>
          <ViroARSceneNavigator
            style={localStyles.arView}
            autofocus={true}
            initialScene={{
              scene: ARView,
            }}
          />
          <ARInitializationUI
            style={{
              position: 'absolute',
              top: 20,
              left: 0,
              right: 0,
              width: '100%',
              height: 140,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          />
        </View>
      )}
      {!headerMenuIsVisible && permissionsGranted && (
        <Animated.View
          style={[
            localStyles.mapContainer,
            {
              // hide because it draws over everything
              position: 'absolute',
              height: animatedMapHeight,

              borderTopLeftRadius: animatedMapBorderRadius,
              borderTopRightRadius: animatedMapBorderRadius,
            },
          ]}>
          <MapboxGL.MapView
            styleURL={'mapbox://styles/--skp--/cknn7qig221ko17p5i3h5mak8'}
            style={localStyles.map}
            scrollEnabled={!mapIsLocked}
            pitchEnabled={!mapIsLocked}
            rotateEnabled={!mapIsLocked}
            zoomEnabled={!mapIsLocked}
            compassEnabled={false}
            attributionEnabled={false}
            animated={true}>
            <MapboxGL.Camera
              followUserLocation={mapIsLocked}
              followUserMode={MapboxGL.UserTrackingModes.FollowWithHeading}
              followPitch={pitch}
              followZoomLevel={zoomLevel}
              pitch={pitch}
              zoomLevel={zoomLevel}
              ref={cameraRef}
            />

            <MapboxGL.ShapeSource
              id="coinLocationSource"
              shape={featureCollection}>
              <MapboxGL.FillLayer
                style={styles.circle}
                minZoomLevel={16}
                id="coinAreaCircles"
                filter={['==', 'active', 'f']}
              />
              <MapboxGL.FillLayer
                style={styles.circleActive}
                minZoomLevel={16}
                id="coinAreaCirclesActive"
                filter={['==', 'active', 't']}
              />
              <MapboxGL.SymbolLayer id="coinAreaIcons" style={styles.icon} />
            </MapboxGL.ShapeSource>
            <MapboxGL.UserLocation
              onUpdate={throttleLocationUpdate}
              visible={true}
              androidRenderMode="compass"
              showsUserHeadingIndicator={true}
              showUserLocation={true}
              minDisplacement={1}
            />
          </MapboxGL.MapView>
          {!activeAreas && (
            <View
              style={{
                position: 'absolute',
                display: 'flex',
                justifyItems: 'center',
                alignItems: 'center',
                top: 10,
                left: 0,
                overflow: 'hidden',
                width: '100%',
                height: 72,
              }}>
              <TextStroke color={'#fff'} stroke={2}>
                <Text
                  style={{
                    ...localStyles.gameFont,
                    ...localStyles.gameFontSizeRegular,
                  }}>
                  Nearest area: {minDelta.toFixed(2)}m
                </Text>
              </TextStroke>
            </View>
          )}
          <View
            style={{
              position: 'absolute',
              display: 'flex',
              justifyItems: 'center',
              alignItems: 'center',
              bottom: -24,
              left: 0,
              overflow: 'hidden',
              width: '100%',
              height: 72,
            }}>
            <TouchableOpacity
              onPress={() => {
                setMapIsLocked(!mapIsLocked);
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#f2a900',
                  width: 72,
                  height: 72,
                  borderRadius: 36,
                  justifyItems: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: '#fff',
                }}>
                <Image
                  style={{width: 32, height: 32, marginTop: -16}}
                  source={mapIsLocked ? lockClosed : lockOpen}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* hack, cause mapview is over all other views */}
          {!activeAreas && notification && (
            <View
              style={{
                display: 'flex',
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  opacity: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  backgroundColor: notification.color,
                  borderRadius: 25,
                  paddingRight: 20,
                  paddingLeft: 20,
                  padding: 10,
                  margin: 30,
                }}>
                <TextStroke color={'#fff'} stroke={2}>
                  <Text
                    style={{
                      ...localStyles.gameFont,
                      ...localStyles.gameFontSizeLarge,
                      textAlign: 'center',
                      color: '#000',
                    }}>
                    {notification.text}
                  </Text>
                </TextStroke>
              </View>
            </View>
          )}
        </Animated.View>
      )}
    </View>
  );
};

export default GameView;
