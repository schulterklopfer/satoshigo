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

import {
  AR_TRACKING_INITIALIZED,
  COLLECT_ITEM_ERROR,
  COLLECT_ITEM_PENDING,
  COLLECT_ITEM_SUCCESS,
  DELETE_PLAYER,
  ENTER_GAME_ERROR,
  ENTER_GAME_PENDING,
  ENTER_GAME_SUCCESS,
  FIND_AREAS_ERROR,
  FIND_AREAS_PENDING,
  FIND_AREAS_SUCCESS,
  GET_AREA_ERROR,
  GET_AREA_PENDING,
  GET_AREA_SUCCESS,
  GET_AREAS_ERROR,
  GET_AREAS_PENDING,
  GET_AREAS_SUCCESS,
  GET_BALANCE_ERROR,
  GET_BALANCE_PENDING,
  GET_BALANCE_SUCCESS,
  GET_GAMES_ERROR,
  GET_GAMES_PENDING,
  GET_GAMES_SUCCESS,
  GET_MY_PLAYER_ERROR,
  GET_MY_PLAYER_PENDING,
  GET_MY_PLAYER_SUCCESS,
  GET_WITHDRAW_ID_ERROR,
  GET_WITHDRAW_ID_PENDING,
  GET_WITHDRAW_ID_SUCCESS,
  INCREASE_BALANCE_BY,
  REGISTER_PLAYER_ERROR,
  REGISTER_PLAYER_PENDING,
  REGISTER_PLAYER_SUCCESS,
  REMOVE_COLLECTED_ITEM,
  SET_APP_STATE,
  SET_AR_CAMERA_BEARING,
  SET_AR_CAMERA_POSITION,
  SET_AR_DEVICE_POSITION,
  SET_AREA_CLIENT_STATE,
  SET_BALANCE,
  SET_CALIBRATION_COMPENSATION,
  SET_DEVICE_BEARING,
  SET_DEVICE_GEO_LOCATION,
  SET_GAME_HASH,
  SET_HEADER_IS_VISIBLE,
  SET_HEADER_MENU_IS_VISIBLE,
  SET_ITEM_CLIENT_STATE,
  SET_NOTIFICATION,
  SET_PLAYER,
  SET_PLAYER_WAS_GREETED,
  SET_REFERENCE,
  SET_STATS_IS_VISIBLE,
  SET_UI_STATE,
  TRIGGER_ITEMS_CHANGED,
  UPDATE_PLAYER_ERROR,
  UPDATE_PLAYER_PENDING,
  UPDATE_PLAYER_SUCCESS,
} from './actions';
import APP_UI_STATES from '../AppUIStates';
import {
  COMPENSATION_LP_BEARING_ALPHA,
  COMPENSATION_LP_POSITION_ALPHA,
  ITEM_CLIENT_STATE_COLLECTABLE,
  ITEM_CLIENT_STATE_COLLECTED,
} from '../globals';

export const initialUiState = {
  arTrackingInitialized: false,
  uiState: APP_UI_STATES.SPLASHSCREEN,
  notification: null,
  headerIsVisible: false,
  headerMenuIsVisible: false,
  statsIsVisible: false,
  playerWasGreeted: false,
};

export const initialAppState = {
  appState: null,
  reference: null,
  deviceBearing: 0,
  deviceGeoLocation: null,
  calibrationCompensation: {bearing: 0, position: [0, 0, 0]},
  arCameraPosition: [0, 0, 0],
  arCameraBearing: 0,
  arDevicePosition: [0, 0, 0],
};

export const initialGamesState = {
  pending: false,
  data: [],
  error: null,
};

export const initialWithdrawIdState = {
  pending: false,
  data: null,
  error: null,
};

export const initialBalanceState = {
  pending: false,
  data: 0,
  error: null,
};

export const initialItemsState = {
  areasChangedAt: 0,
  itemsChangedAt: 0,
  pending: false,
  areas: {},
  error: null,
};

export const initialPlayerState = {
  pending: false,
  data: {},
  error: null,
};

export function uiReducer(state = initialUiState, action) {
  switch (action.type) {
    case AR_TRACKING_INITIALIZED:
      return {
        ...state,
        arTrackingInitialized: action.trackingNormal,
      };
    case SET_UI_STATE:
      return {
        ...state,
        uiState: action.uiState,
      };
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.notification,
      };
    case SET_HEADER_IS_VISIBLE:
      return {
        ...state,
        headerIsVisible: action.headerIsVisible,
      };
    case SET_HEADER_MENU_IS_VISIBLE:
      return {
        ...state,
        headerMenuIsVisible: action.headerMenuIsVisible,
      };
    case SET_STATS_IS_VISIBLE:
      return {
        ...state,
        statsIsVisible: action.statsIsVisible,
      };
    case SET_PLAYER_WAS_GREETED:
      console.log(action);
      return {
        ...state,
        playerWasGreeted: action.playerWasGreeted,
      };
    default:
      return state;
  }
}

export function appReducer(state = initialAppState, action) {
  switch (action.type) {
    case SET_APP_STATE:
      return {
        ...state,
        appState: action.appState,
      };
    case SET_DEVICE_GEO_LOCATION:
      return {
        ...state,
        deviceGeoLocation: action.geoLocation,
      };
    case SET_DEVICE_BEARING:
      return {
        ...state,
        deviceBearing: action.deviceBearing,
      };
    case SET_AR_CAMERA_BEARING:
      return {
        ...state,
        arCameraBearing: action.arCameraBearing,
      };
    case SET_AR_CAMERA_POSITION:
      return {
        ...state,
        arCameraPosition: action.arCameraPosition,
      };
    case SET_AR_DEVICE_POSITION:
      return {
        ...state,
        arDevicePosition: action.arDevicePosition,
      };
    case SET_REFERENCE:
      return {
        ...state,
        reference: action.reference,
      };
    case SET_CALIBRATION_COMPENSATION:
      // simple low pass filtering here
      const oldPosition = state.calibrationCompensation.position;
      const oldBearing = state.calibrationCompensation.bearing;
      const position = [
        action.calibrationCompensation.position[0] *
          COMPENSATION_LP_POSITION_ALPHA +
          (1 - COMPENSATION_LP_POSITION_ALPHA) * oldPosition[0],
        action.calibrationCompensation.position[1] *
          COMPENSATION_LP_POSITION_ALPHA +
          (1 - COMPENSATION_LP_POSITION_ALPHA) * oldPosition[1],
        action.calibrationCompensation.position[2] *
          COMPENSATION_LP_POSITION_ALPHA +
          (1 - COMPENSATION_LP_POSITION_ALPHA) * oldPosition[2],
      ];
      const bearing =
        action.calibrationCompensation.bearing * COMPENSATION_LP_BEARING_ALPHA +
        (1 - COMPENSATION_LP_BEARING_ALPHA) * oldBearing;

      return {
        ...state,
        calibrationCompensation: {position, bearing},
      };
    case SET_GAME_HASH:
      return {
        ...state,
        gameHash: action.gameHash,
      };
    case SET_PLAYER:
      return {
        ...state,
        player: action.player,
      };
    default:
      return state;
  }
}

export function playerReducer(state = initialPlayerState, action) {
  let data;
  switch (action.type) {
    case REGISTER_PLAYER_PENDING:
    case UPDATE_PLAYER_PENDING:
    case GET_MY_PLAYER_PENDING:
    case ENTER_GAME_PENDING:
      return {
        ...state,
        pending: true,
      };
    case REGISTER_PLAYER_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case UPDATE_PLAYER_SUCCESS:
    case GET_MY_PLAYER_SUCCESS:
      data = Object.assign({}, state.data);
      data.user_name = action.data.user_name;
      data.enableHiScore = action.data.enableHiScore;
      console.log('------action', action);
      console.log('------data', data);
      return {
        ...state,
        pending: false,
        data,
      };
    case ENTER_GAME_SUCCESS:
      data = Object.assign({}, state.data);
      data.gameHash = action.data.hash;
      return {
        ...state,
        pending: false,
        data: data,
      };
    case REGISTER_PLAYER_ERROR:
    case UPDATE_PLAYER_ERROR:
    case GET_MY_PLAYER_ERROR:
    case ENTER_GAME_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case DELETE_PLAYER:
      return {
        ...state,
        pending: false,
        error: null,
        data: {},
      };
    default:
      return state;
  }
}

export function withdrawIdReducer(state = initialWithdrawIdState, action) {
  switch (action.type) {
    case GET_WITHDRAW_ID_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_WITHDRAW_ID_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data.id,
      };

    case GET_WITHDRAW_ID_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function balanceReducer(state = initialBalanceState, action) {
  let balance = 0;
  switch (action.type) {
    case GET_BALANCE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_BALANCE_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };

    case GET_BALANCE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case SET_BALANCE:
      return {
        ...state,
        pending: false,
        data: {balance: action.sats},
      };
    case INCREASE_BALANCE_BY:
      balance = state.data.balance;
      console.log(state);
      return {
        ...state,
        pending: false,
        data: {balance: balance + action.sats},
      };
    default:
      return state;
  }
}

export function gamesReducer(state = initialGamesState, action) {
  switch (action.type) {
    case GET_GAMES_PENDING:
      return {
        ...state,
        error: null,
        pending: true,
      };
    case GET_GAMES_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        data: action.data,
      };
    case GET_GAMES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

function initClientState(items, initialState) {
  if (!items || !items.length) {
    return;
  }
  for (const itemHash in items) {
    items[itemHash]._clientState = initialState;
  }
}

export function itemsReducer(state = initialItemsState, action) {
  let areasChangedAt = state.areasChangedAt;
  let itemsChangedAt = state.itemsChangedAt;
  let areas = state.areas;
  let now = new Date().getTime();
  let r;

  switch (action.type) {
    case GET_AREAS_PENDING:
    case GET_AREA_PENDING:
    case FIND_AREAS_PENDING:
      return {
        ...state,
        error: null,
        pending: true,
      };
    case GET_AREAS_SUCCESS:
      for (const areaHash in action.data) {
        initClientState(
          action.data[areaHash].items,
          ITEM_CLIENT_STATE_COLLECTABLE,
        );
      }
      return {
        ...state,
        pending: false,
        error: null,
        areas: action.data,
        areasChangedAt: now,
      };
    case GET_AREA_SUCCESS:
      console.log(action.data);
      initClientState(action.data.items, ITEM_CLIENT_STATE_COLLECTABLE);
      state.areas[action.data.hash] = action.data;
      return {
        ...state,
        pending: false,
        error: null,
        areas: action.data,
        areasChangedAt: now,
      };
    case GET_AREAS_ERROR:
    case GET_AREA_ERROR:
    case COLLECT_ITEM_ERROR:
    case FIND_AREAS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case COLLECT_ITEM_PENDING:
      return {
        ...state,
        error: null,
        pending: true,
      };
    case FIND_AREAS_SUCCESS:
      const additions = action.data;

      if (additions && additions.length) {
        //areas = state.areas;
        //areas = areas || Object.assign({}, state.areas);
        for (const area of additions) {
          if (!areas[area.hash]) {
            if (area.items) {
              const itemDictionary = {};
              for (const item of area.items) {
                itemDictionary[item.hash] = item;
                if (item._clientState !== ITEM_CLIENT_STATE_COLLECTABLE) {
                  item._clientState = ITEM_CLIENT_STATE_COLLECTABLE;
                  itemsChangedAt = now;
                }
              }
              area.items = itemDictionary;
            }
            areas[area.hash] = area;
            areasChangedAt = now;
          }
        }
      }

      r = {
        ...state,
        pending: false,
        error: null,
      };

      if (areasChangedAt !== state.areasChangedAt) {
        //r.areas = areas;
        r.areasChangedAt = areasChangedAt;
      }

      if (itemsChangedAt !== state.itemsChangedAt) {
        //r.areas = areas;
        r.itemsChangedAt = itemsChangedAt;
      }

      return r;

    case COLLECT_ITEM_SUCCESS:
      //console.log(action, state.items);
      if (state.areas) {
        for (const areaHash in state.areas) {
          if (
            state.areas[areaHash].items &&
            state.areas[areaHash].items[action.data.itemHash]
          ) {
            areas = state.areas;
            //data = Object.assign({}, state.areas);
            areas[areaHash].items[action.data.itemHash]._clientState =
              ITEM_CLIENT_STATE_COLLECTED;
            itemsChangedAt = now;
          }
        }
      }

      r = {
        ...state,
        pending: false,
        error: null,
      };

      if (itemsChangedAt !== state.itemsChangedAt) {
        //r.areas = areas;
        r.itemsChangedAt = itemsChangedAt;
      }

      return r;

    // remove item after it was animated away
    case REMOVE_COLLECTED_ITEM:
      if (!action.areaHash) {
        // area was not provided ... look for area with item
        for (const areaHash in state.areas) {
          if (state.areas[areaHash].items) {
            for (const itemHash in state.areas[areaHash].items) {
              if (itemHash === action.itemHash) {
                action.areaHash = areaHash;
                break;
              }
            }
          }
          if (action.areaHash) {
            break;
          }
        }
      }

      if (
        state.areas[action.areaHash] &&
        state.areas[action.areaHash].items &&
        state.areas[action.areaHash].items[action.itemHash]
      ) {
        //areas = state.areas;
        //data = Object.assign({}, state.areas);
        delete areas[action.areaHash].items[action.itemHash];
        itemsChangedAt = now;
      }

      r = {
        ...state,
        pending: false,
        error: null,
      };

      if (itemsChangedAt !== state.itemsChangedAt) {
        //r.areas = areas;
        r.itemsChangedAt = itemsChangedAt;
      }

      return r;

    case SET_ITEM_CLIENT_STATE:
      if (
        state.areas[action.areaHash] &&
        state.areas[action.areaHash].items &&
        state.areas[action.areaHash].items[action.itemHash]
      ) {
        //areas = state.areas;
        //data = Object.assign({}, state.areas);
        areas[action.areaHash].items[action.itemHash]._clientState =
          action.state;
        itemsChangedAt = now;
      }

      r = {
        ...state,
        pending: false,
        error: null,
      };

      if (itemsChangedAt !== state.itemsChangedAt) {
        //r.areas = areas;
        r.itemsChangedAt = itemsChangedAt;
      }

      return r;

    case SET_AREA_CLIENT_STATE:
      if (state.areas[action.areaHash]) {
        //areas = state.areas;
        //data = Object.assign({}, state.areas);

        if (action.action === 'set') {
          areas[action.areaHash]._clientState =
            (areas[action.areaHash]._clientState || 0) | action.state;
          areasChangedAt = now;
        } else if (action.action === 'clear') {
          areas[action.areaHash]._clientState =
            // eslint-disable-next-line no-bitwise
            (areas[action.areaHash]._clientState || 0) & ~action.state;
          areasChangedAt = now;
        } else if (action.action === 'overwrite') {
          areas[action.areaHash]._clientState = action.state;
          areasChangedAt = now;
        }
      }

      r = {
        ...state,
        pending: false,
        error: null,
      };

      if (areasChangedAt !== state.areasChangedAt) {
        //r.areas = areas;
        r.areasChangedAt = areasChangedAt;
      }

      return r;

    case TRIGGER_ITEMS_CHANGED:
      itemsChangedAt = now;
      return {
        ...state,
        itemsChangedAt,
      };

    default:
      return state;
  }
}
