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

import React, {useCallback, useEffect, useRef} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {AppState, StatusBar, Text, View} from 'react-native';
import {localStyles} from './localStyles';
import showAlert from './helpers/showAlert';
import {mapboxAccessToken} from './config';

import {
  enterGame,
  findAreas,
  getArea,
  getBalance,
  getGames,
} from './redux/dispatch';
import {useDispatch, useSelector} from 'react-redux';
import {
  removeCollectedItem,
  setAppState,
  setGameHash,
  setHeaderIsVisible,
  setNotification,
  setUIState,
} from './redux/actions';
import APP_UI_STATES from './AppUIStates';
import {
  getAppState as getAppStateSelector,
  getDeviceGeoLocation as getGeoLocationSelector,
  getGameHash as getGameHashSelector,
  getGames as getGamesSelector,
  getGamesError as getGamesErrorSelector,
  getGamesPending as getGamesPendingSelector,
  getHeaderIsVisible as getHeaderIsVisibleSelector,
  getIsPlaying as getIsPlayingSelector,
  getNotification as getNotificationSelector,
  getPlayer as getPlayerSelector,
  getPlayerWasGreeted as getPlayerWasGreetedSelector,
  getStatsIsVisible as getStatsIsVisibleSelector,
  getUIState as getUIStateSelector,
} from './redux/selectors';
import Main from './Main';
import TextStroke from './component/TextStroke';
import Header from './component/Header';
import Stats from './component/Stats';
import WebSocket from 'react-native-websocket';
import {AREA_FIND_RADIUS, WS_URL} from './globals';
import {distance} from './helpers/distance';

const App = () => {
  const dispatch = useDispatch();

  const games = useSelector(getGamesSelector);
  const gamesPending = useSelector(getGamesPendingSelector);
  const gamesError = useSelector(getGamesErrorSelector);
  const gameHash = useSelector(getGameHashSelector);
  const isPlaying = useSelector(getIsPlayingSelector);
  const player = useSelector(getPlayerSelector);
  const playerWasGreeted = useSelector(getPlayerWasGreetedSelector);

  const uiState = useSelector(getUIStateSelector);
  const appState = useSelector(getAppStateSelector);
  const geoLocation = useSelector(getGeoLocationSelector);
  const notification = useSelector(getNotificationSelector);
  const headerIsVisible = useSelector(getHeaderIsVisibleSelector);
  const statsIsVisible = useSelector(getStatsIsVisibleSelector);
  // Need to create state first. Setter is not used in this case

  let notificationTimeoutRef = useRef(0);

  const onWebsocketMessage = useCallback(
    (message) => {
      'websocket message', JSON.stringify(message, null, 2);

      if (!message.type || !message.body) {
        return;
      }

      switch (message.type) {
        case 'itemChanged':
          if (
            message.body.itemHash &&
            message.body.action === 'collected' &&
            message.actor !== player.hash
          ) {
            dispatch(removeCollectedItem(message.body.itemHash));
          }
          break;
        case 'areaChanged':
          if (
            message.body.areaHash &&
            message.body.action === 'updated' &&
            parseFloat(message.body.lon) &&
            parseFloat(message.body.lat)
          ) {
            if (!geoLocation) {
              return;
            }
            // check if area is in range with lon lat
            const delta = distance(
              geoLocation,
              {longitude: message.body.lon, latitude: message.body.lat},
              'M',
            );

            if (delta > AREA_FIND_RADIUS) {
              // ignore updated area
              return;
            }

            dispatch(getArea(message.body.areaHash));
          }
          break;
      }
    },
    [player, dispatch],
  );

  useEffect(() => {
    console.log('Header is visible', uiState === APP_UI_STATES.IN_GAME);
    dispatch(setHeaderIsVisible(uiState === APP_UI_STATES.IN_GAME));
  }, [dispatch, uiState]);

  useEffect(() => {
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }

    notificationTimeoutRef.current = setTimeout(() => {
      dispatch(setNotification(null));
    }, notification?.timeout || 1000);
  }, [dispatch, notification, notificationTimeoutRef]);

  useEffect(() => {
    // listen to appstate
    const handleAppStateChange = (nextAppState) => {
      dispatch(setAppState(nextAppState));
    };

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [dispatch]);

  useEffect(() => {
    if (!geoLocation) {
      return;
    }
    // do some stuff when app state changes
    if (appState === 'active' && player && player.hash) {
      // reload balance and current withdraw state
      console.log('getting balance and stuff');
      dispatch(findAreas(geoLocation.longitude, geoLocation.latitude, 100, []));
      dispatch(getBalance(player));
    }
  }, [dispatch, appState, player]);

  useEffect(() => {
    MapboxGL.setAccessToken(mapboxAccessToken);
  }, []);

  useEffect(() => {
    console.log('dispatching getGames');
    dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    if (!games || !games.length || gamesPending) {
      return;
    }

    console.log('player was greeted', playerWasGreeted);

    if (!playerWasGreeted || !player || !player.hash) {
      console.log('APP_UI_STATES.PLAYER_SETUP');
      dispatch(setUIState(APP_UI_STATES.PLAYER_SETUP));
      return;
    }

    if (!gameHash) {
      // we dont have a game hash yet
      console.log('no game hash selected');
      if (games.length === 1) {
        // only one game... use it without game selection ui
        console.log('only one game ... auto selecting');
        dispatch(setGameHash(games[0].hash));
      } else {
        console.log('more than one game');
        console.log('APP_UI_STATES.GAME_SELECTION');
        dispatch(setUIState(APP_UI_STATES.GAME_SELECTION));
      }
      return;
    }

    if (player && player.hash && gameHash) {
      console.log('APP_UI_STATES.ENTERING_GAME');
      dispatch(setUIState(APP_UI_STATES.ENTERING_GAME));
      if (!isPlaying) {
        console.log('dispatching enter game');
        dispatch(enterGame({playerHash: player.hash}, gameHash, player));
      } else {
        console.log('APP_UI_STATES.IN_GAME');
        dispatch(setUIState(APP_UI_STATES.IN_GAME));
      }
    }
  }, [
    dispatch,
    gameHash,
    games,
    gamesPending,
    isPlaying,
    player,
    playerWasGreeted,
  ]);

  useEffect(() => {
    if (gamesError) {
      console.log(gamesError);
      showAlert(
        'Error',
        'Error fetching games',
        [
          {
            text: 'Retry',
            onPress: () => {
              console.log('retry');
              dispatch(getGames());
            },
          },
        ],
        false,
      );
    }
  }, [dispatch, gamesError]);

  return (
    <View style={{...localStyles.flex}}>
      <StatusBar hidden={true} />
      <WebSocket
        url={WS_URL}
        onMessage={(msg) => {
          console.log(onWebsocketMessage);
        }}
        reconnect={true}
      />
      <Main appUIState={uiState} />
      {notification && (
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
      {headerIsVisible && <Header />}
      {statsIsVisible && <Stats />}
    </View>
  );
};

export default App;
