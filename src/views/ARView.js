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

// https://sketchfab.com

import React, {useCallback, useEffect, useRef} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

import {
  ARTrackingInitialized,
  removeCollectedItem,
  setARCameraPosition,
  setAreaClientState,
  setItemClientState,
  setNotification,
} from '../redux/actions';

import {
  ViroAmbientLight,
  ViroAnimations,
  ViroARScene,
  ViroConstants,
  ViroMaterials,
  ViroNode,
  ViroQuad,
} from 'react-viro';
import {useDispatch, useSelector} from 'react-redux';
import {
  getArCameraPosition as getArCameraPositionSelector,
  getAreas as getAreasSelector,
  getAreasChangedAt as getAreasChangedAtSelector,
  getItemsChangedAt as getItemsChangedAtSelector,
  getPlayer as getPlayerSelector,
} from '../redux/selectors';
import {collectItem} from '../redux/dispatch';
import {
  AREA_CLIENT_STATE_ACTIVE,
  AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS,
  CAMERA_POSITION_UPDATE_THRESHOLD,
  ITEM_CLIENT_STATE_COLLECTABLE,
  ITEM_CLIENT_STATE_COLLECTING,
  MAX_COLLECT_DISTANCE_SQUARED,
  TOO_FAR_AWAY_TEXTS,
} from '../globals';
import itemPositionsInCircle from '../helpers/itemPositionsInCircle';

import coinSound from '../res/smb3_coin.wav';
import bitcoinGfx from '../res/bitcoin_icon.png';
import bitcoinRedGfx from '../res/bitcoin_icon_red.png';
import Sound from 'react-native-sound';

ViroMaterials.createMaterials({
  bitcoin: {
    diffuseTexture: bitcoinGfx,
    cullMode: 'None',
  },
  bitcoinRed: {
    diffuseTexture: bitcoinRedGfx,
    cullMode: 'None',
  },
});

ViroAnimations.registerAnimations({
  loopRotate: {properties: {rotateY: '+=135'}, duration: 1500},
  loopRotateFast: {properties: {rotateY: '+=1080'}, duration: 1500},
  moveUp: {properties: {positionY: '+=20'}, duration: 1500, easing: 'EaseOut'},
  moveUpAndRotate: [['loopRotateFast'], ['moveUp']],
  fade: {properties: {opacity: 0}, duration: 1000},
});

const ARView = () => {
  const dispatch = useDispatch();

  const areas = useSelector(getAreasSelector);
  const areasChangedAt = useSelector(getAreasChangedAtSelector);
  const arCameraPosition = useSelector(getArCameraPositionSelector);

  const arSceneRef = useRef();
  const itemsChangedAt = useSelector(getItemsChangedAtSelector);

  const player = useSelector(getPlayerSelector);

  const coinSoundRef = useRef(
    new Sound(coinSound, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log(error);
      }
    }),
  );

  const onTrackingUpdated = useCallback(
    (state, reason) => {
      let trackingNormal = false;

      switch (state) {
        case ViroConstants.TRACKING_NORMAL:
          console.log('ViroConstants.TRACKING_NORMAL', reason);
          trackingNormal = true;
          break;
        case ViroConstants.TRACKING_UNAVAILABLE:
          console.log('ViroConstants.TRACKING_UNAVAILABLE');
          if (reason === 1) {
            console.log('tracking not initialized');
          } else {
            console.log('tracking lost');
          }
          break;
        case ViroConstants.TRACKING_LIMITED:
          console.log('ViroConstants.TRACKING_LIMITED', reason);
          break;
      }
      console.log(state, reason);
      dispatch(ARTrackingInitialized(trackingNormal));
    },
    //    [dispatch, hasCoordinateSystem, deviceBearing, deviceGeoLocation],
    [dispatch],
  );

  const onCameraTransformUpdate = useCallback(
    (position) => {
      if (!position) {
        return;
      }

      const newPosition = [
        ((position[0] / CAMERA_POSITION_UPDATE_THRESHOLD) << 0) *
          CAMERA_POSITION_UPDATE_THRESHOLD,
        ((position[1] / CAMERA_POSITION_UPDATE_THRESHOLD) << 0) *
          CAMERA_POSITION_UPDATE_THRESHOLD,
        ((position[2] / CAMERA_POSITION_UPDATE_THRESHOLD) << 0) *
          CAMERA_POSITION_UPDATE_THRESHOLD,
      ];

      if (
        newPosition[0] !== arCameraPosition[0] ||
        newPosition[1] !== arCameraPosition[1] ||
        newPosition[2] !== arCameraPosition[2]
      ) {
        dispatch(setARCameraPosition(newPosition));
      }
    },
    [arCameraPosition, dispatch],
  );

  const onItemClick = useCallback(
    (areaHash, clickedItemHash) => {
      if (
        !areas[areaHash] ||
        !areas[areaHash].items ||
        !areas[areaHash].items[clickedItemHash]
      ) {
        return;
      }

      const item = areas[areaHash].items[clickedItemHash];

      console.log(areaHash, clickedItemHash);
      if (!item || item._clientState !== ITEM_CLIENT_STATE_COLLECTABLE) {
        return;
      }

      if (!item._isReachable) {
        dispatch(
          setNotification({
            text: TOO_FAR_AWAY_TEXTS[
              Math.floor(Math.random() * TOO_FAR_AWAY_TEXTS.length)
            ],
            opacity: 1,
            color: 'rgba(255,0,0,0.5)',
          }),
        );
        return;
      }

      const value = item.data;

      //item._clientState = ITEM_CLIENT_STATE_COLLECTING;
      if (item._clientState !== ITEM_CLIENT_STATE_COLLECTING) {
        dispatch(
          setItemClientState(
            areaHash,
            clickedItemHash,
            ITEM_CLIENT_STATE_COLLECTING,
          ),
        );
      }

      console.log(JSON.stringify(value, null, 2));

      dispatch(collectItem(clickedItemHash, value, player));
      dispatch(
        setNotification({
          text: 'Collecting!',
          opacity: 1,
          color: 'rgba(0,255,0,0.5)',
        }),
      );
      coinSoundRef.current.play();

      setTimeout(() => {
        console.log('removing item from list', areaHash, item.hash);
        dispatch(removeCollectedItem(item.hash, areaHash));
      }, 1500);
    },
    [dispatch, player],
  );

  useEffect(() => {
    if (!arSceneRef.current) {
      return;
    }

    const interval = setInterval(() => {
      arSceneRef.current.getCameraOrientationAsync().then((orientation) => {
        onCameraTransformUpdate(orientation.position);
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [arSceneRef, onCameraTransformUpdate]);

  useEffect(() => {
    // check if near center of area. if yes
    // create locations for items around camera

    // will be called twice in a row, cause setAreaClientState will
    // alter areasChangedAt as well which is in the deps area. Second
    // time no setAreaClientState will be dispatched. This is a bit
    // flawed.
    for (const areaHash in areas) {
      if (!areas.hasOwnProperty(areaHash)) {
        continue;
      }
      const area = areas[areaHash];

      if (
        (area._clientState & AREA_CLIENT_STATE_ACTIVE) !==
        AREA_CLIENT_STATE_ACTIVE
      ) {
        continue;
      }

      if (
        (area._clientState & AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS) ===
        AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS
      ) {
        continue;
      }

      itemPositionsInCircle(area.items, arCameraPosition, area.radius * 0.5);
      console.log('setting items for area', area.hash);

      dispatch(
        setAreaClientState(
          areaHash,
          AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS,
          'set',
        ),
      );
    }
  }, [areasChangedAt, dispatch]);

  useEffect(() => {
    if (!arCameraPosition || !areas || areasChangedAt === 0) {
      return;
    }
    for (const areaHash in areas) {
      if (!areas.hasOwnProperty(areaHash)) {
        continue;
      }
      const area = areas[areaHash];

      if (
        (area._clientState & AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS) !==
        AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS
      ) {
        continue;
      }

      for (const itemHash in area.items) {
        if (!area.items || !area.items.hasOwnProperty(itemHash)) {
          continue;
        }

        const item = area.items[itemHash];
        const itemARPosition = item._arPosition;

        const deltaFromCamera = [
          arCameraPosition[0] - itemARPosition[0],
          arCameraPosition[1] - itemARPosition[1],
          arCameraPosition[2] - itemARPosition[2],
        ];

        const squaredDistanceToCamera =
          deltaFromCamera[0] * deltaFromCamera[0] +
          deltaFromCamera[1] * deltaFromCamera[1] +
          deltaFromCamera[2] * deltaFromCamera[2];

        item._squaredDistanceToCamera = squaredDistanceToCamera;
        item._isReachable =
          squaredDistanceToCamera < MAX_COLLECT_DISTANCE_SQUARED;
      }
    }
  }, [areasChangedAt, itemsChangedAt, arCameraPosition]);

  return (
    <ViroARScene ref={arSceneRef} onTrackingUpdated={onTrackingUpdated}>
      <ViroAmbientLight color="#ffffff" />
      {(areasChangedAt || itemsChangedAt) &&
        Object.entries(areas).map(([areaHash, area]) => {
          if (
            (area._clientState & AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS) !==
            AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS
          ) {
            return null;
          }
          return Object.entries(area.items).map(([itemHash, item]) => {
            if (!item._arPosition) {
              return null;
            } else {
              if (!item._isReachable) {
                return (
                  <ViroNode
                    onClick={
                      item._clientState === ITEM_CLIENT_STATE_COLLECTABLE
                        ? (e) => {
                            onItemClick(area.hash, item.hash);
                          }
                        : null
                    }
                    key={item.hash}
                    position={item._arPosition}
                    animation={{
                      name: 'loopRotate',
                      run: true,
                      interruptible: true,
                      loop: true,
                    }}>
                    <ViroQuad
                      materials={['bitcoinRed']}
                      position={[0, 0, 0]}
                      scale={[0.25, 0.25, 0.25]}
                    />
                  </ViroNode>
                );
              } else {
                return (
                  <ViroNode key={item.hash} position={item._arPosition}>
                    <ViroNode
                      onClick={
                        item._clientState === ITEM_CLIENT_STATE_COLLECTABLE
                          ? (e) => {
                              onItemClick(area.hash, item.hash);
                            }
                          : null
                      }
                      position={[0, 0, 0]}
                      animation={{
                        name:
                          item._clientState === ITEM_CLIENT_STATE_COLLECTING
                            ? 'loopRotateFast'
                            : item._clientState ===
                              ITEM_CLIENT_STATE_COLLECTABLE
                            ? 'loopRotate'
                            : 'moveUpAndRotate',
                        run: true,
                        interruptible: true,
                        loop: true,
                      }}>
                      <ViroQuad
                        materials={['bitcoin']}
                        position={[0, 0, 0]}
                        scale={[0.25, 0.25, 0.25]}
                      />
                    </ViroNode>
                  </ViroNode>
                );
              }
            }
          });
        })}
    </ViroARScene>
  );
};

export default ARView;
