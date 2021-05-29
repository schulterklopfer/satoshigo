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

import React from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import {localStyles} from '../localStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAreasSuccess,
  setNotification,
  setStatsIsVisible,
  setUIState,
} from '../redux/actions';
import APP_UI_STATES from '../AppUIStates';
import PropTypes from 'prop-types';
import {
  getDeviceGeoLocation as getGeoLocationSelector,
  getGameHash as getGameHashSelector,
  getGames as getGamesSelector,
  getStatsIsVisible as getStatsIsVisibleSelector,
} from '../redux/selectors';
import randomGeoLocationAround from '../helpers/randomGeoLocationAround';
import Button from './Button';
import closeX from '../res/closeX.png';
import {
  AREA_CLIENT_STATE_NONE,
  ITEM_CLIENT_STATE_COLLECTABLE,
} from '../globals';

const GameMenu = (props) => {
  const dispatch = useDispatch();

  const gameHash = useSelector(getGameHashSelector);
  const geoLocation = useSelector(getGeoLocationSelector);
  const games = useSelector(getGamesSelector);
  const statsIsVisible = useSelector(getStatsIsVisibleSelector);

  const exitGame = () => {
    console.log('exit game');
    dispatch(setUIState(APP_UI_STATES.GAME_SELECTION));
  };

  const dev_scatterCoins = () => {
    console.log('scattering coins');

    if (!geoLocation) {
      props.onClosePressed();
      dispatch(
        setNotification({
          text: 'Nah! Still a bit confused about my location',
          opacity: 1,
          color: 'rgba(255,0,255,0.5)',
          timeout: 5000,
        }),
      );
      return;
    }

    const areaTemplate = {
      _clientState: AREA_CLIENT_STATE_NONE,
      hash: '',
      lon: 0,
      lat: 0,
      gameHash: '',
      radius: 5,
    };

    const itemTemplate = {
      type: 'simple',
      appearance: 'coin',
      _clientState: ITEM_CLIENT_STATE_COLLECTABLE,
      hash: '',
      areaHash: '',
      data: 10,
    };

    const areaCount = 3;
    const itemCount = 10;
    const radius = 30;

    const areas = {};

    for (let i = 0; i < areaCount; i++) {
      const area = Object.assign({}, areaTemplate);
      const p = randomGeoLocationAround(
        geoLocation.longitude,
        geoLocation.latitude,
        radius,
      );
      area.hash = 'areaHash' + i;
      area.gameHash = gameHash;
      area.lon = p.lon;
      area.lat = p.lat;

      area.items = {};
      for (let j = 0; j < itemCount; j++) {
        const item = Object.assign({}, itemTemplate);
        item.areaHash = area.hash;
        item.hash = 'itemHash' + j;
        area.items[item.hash] = item;
      }

      areas[area.hash] = area;
    }
    dispatch(getAreasSuccess(areas));
    props.onClosePressed();
  };

  return (
    <View
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: '#ff9900',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flex: 1}}>
        <View
          style={{
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={props.onClosePressed}>
            <Image
              source={closeX}
              style={{width: 24, height: 24, margin: 20, marginLeft: 20}}
            />
          </TouchableOpacity>
        </View>
        {/*}
        <Button
          title={'Show Hiscore'}
          onPress={() => {}}
          style={{
            flex: 1,
            marginBottom: 1,
            borderRadius: 0,
            width: Dimensions.get('window').width,
            margin: 1,
          }}
        />
                {*/}

        <Button
          title={'player options'}
          onPress={() => {
            dispatch(setUIState(APP_UI_STATES.PLAYER_OPTIONS));
          }}
          style={{
            flex: 1,

            marginBottom: 1,
            borderRadius: 0,
            width: Dimensions.get('window').width,
            margin: 1,
          }}
        />
        <Button
          title={'Credits'}
          onPress={() => {
            dispatch(setUIState(APP_UI_STATES.CREDITS));
          }}
          style={{
            flex: 1,

            marginBottom: 1,
            borderRadius: 0,
            width: Dimensions.get('window').width,
            margin: 1,
          }}
        />

        {games.length > 1 && (
          <Button
            title={'Exit game'}
            onPress={exitGame}
            style={{
              flex: 1,

              marginBottom: 1,
              borderRadius: 0,
              width: Dimensions.get('window').width,
              margin: 1,
            }}
          />
        )}
        <Button
          title={'DEV: Scatter coins'}
          onPress={dev_scatterCoins}
          style={{
            flex: 1,

            marginBottom: 1,
            borderRadius: 0,
            width: Dimensions.get('window').width,
            margin: 1,
          }}
        />
        <Button
          title={'DEV: stats'}
          onPress={() => {
            console.log('stats');
            dispatch(setStatsIsVisible(!statsIsVisible));
            props.onClosePressed();
          }}
          style={{
            flex: 1,

            marginBottom: 1,
            borderRadius: 0,
            width: Dimensions.get('window').width,
            margin: 1,
          }}
        />
      </View>
      <Button
        title={'Fund a game'}
        onPress={() => {}}
        noTextStroke={true}
        style={{
          ...localStyles.mtL,
          ...localStyles.mbL,
          backgroundColor: '#2f2',
        }}
      />
    </View>
  );
};

GameMenu.propTypes = {
  onClosePressed: PropTypes.func.isRequired,
};

export default GameMenu;
