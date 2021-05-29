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

import {DefaultApi, PlayerUpdateBody} from '../api';
import {
  collectItemError,
  collectItemPending,
  collectItemSuccess,
  enterGameError,
  enterGamePending,
  enterGameSuccess,
  findAreasError,
  findAreasPending,
  findAreasSuccess,
  getAreaError,
  getAreaPending,
  getAreaSuccess,
  getBalanceError,
  getBalancePending,
  getBalanceSuccess,
  getGamesError,
  getGamesPending,
  getGamesSuccess,
  getMyPlayerError,
  getMyPlayerPending,
  getMyPlayerSuccess,
  getWithdrawIdError,
  getWithdrawIdPending,
  getWithdrawIdSuccess,
  increaseBalanceBy,
  registerPlayerError,
  registerPlayerPending,
  registerPlayerSuccess,
  updatePlayerError,
  updatePlayerPending,
  updatePlayerSuccess,
} from './actions';
import {API_URL} from '../globals';

export const api = new DefaultApi(null, API_URL, fetch);

export function getArea(areaHash) {
  return async (dispatch) => {
    dispatch(getAreaPending());
    try {
      const area = await api.getArea(areaHash);
      dispatch(getAreaSuccess(area));
    } catch (err) {
      dispatch(getAreaError(err));
    }
  };
}

export function getGames() {
  return async (dispatch) => {
    dispatch(getGamesPending());
    try {
      const items = await api.getGames();
      dispatch(getGamesSuccess(items));
    } catch (err) {
      dispatch(getGamesError(err));
    }
  };
}

export function registerPlayer(player: PlayerUpdateBody) {
  return async (dispatch) => {
    dispatch(registerPlayerPending());
    try {
      const playerResult = await api.registerPlayer(player);
      dispatch(registerPlayerSuccess(playerResult));
    } catch (err) {
      dispatch(registerPlayerError(err));
    }
  };
}

export function updatePlayer(player: PlayerUpdateBody, p) {
  console.log(player, p);
  return async (dispatch) => {
    dispatch(updatePlayerPending());
    try {
      const playerResult = await api.updatePlayer(player, p.hash, {
        headers: {
          'X-API-KEY': p.secret,
        },
      });
      dispatch(updatePlayerSuccess(playerResult));
    } catch (err) {
      dispatch(updatePlayerError(err));
    }
  };
}

export function getMyPlayer(p) {
  return async (dispatch) => {
    dispatch(getMyPlayerPending());
    try {
      const playerResult = await api.findMe({
        headers: {
          'X-API-KEY': p.secret,
        },
      });
      dispatch(getMyPlayerSuccess(playerResult));
    } catch (err) {
      dispatch(getMyPlayerError(err));
    }
  };
}

export function findAreas(lon, lat, radius, excludeAreas) {
  return async (dispatch) => {
    dispatch(findAreasPending());
    try {
      const areas = await api.findAreas({
        lon,
        lat,
        radius,
        excludeItems: excludeAreas,
      });
      dispatch(findAreasSuccess(areas));
    } catch (err) {
      dispatch(findAreasError(err));
    }
  };
}

export function enterGame(body, gameHash, p) {
  return async (dispatch) => {
    dispatch(enterGamePending());
    try {
      const game = await api.enterGame(body, gameHash, {
        headers: {
          'X-API-KEY': p.secret,
        },
      });
      dispatch(enterGameSuccess(game));
    } catch (err) {
      dispatch(enterGameError(err));
    }
  };
}

export function collectItem(itemHash, value, p) {
  return async (dispatch) => {
    dispatch(collectItemPending());
    try {
      const item = await api.collectItem(itemHash, {
        headers: {
          'X-API-KEY': p.secret,
        },
      });
      console.log('COLLECT ITEM', item);
      dispatch(increaseBalanceBy(value));
      dispatch(collectItemSuccess(item));
    } catch (err) {
      dispatch(collectItemError(err));
    }
  };
}

export function getWithdrawId(p) {
  return async (dispatch) => {
    dispatch(getWithdrawIdPending());
    try {
      const withdrawIdResult = await api.getWithdrawId({
        headers: {
          'X-API-KEY': p.secret,
        },
      });
      dispatch(getWithdrawIdSuccess(withdrawIdResult));
    } catch (err) {
      dispatch(getWithdrawIdError(err));
    }
  };
}

export function getBalance(p) {
  return async (dispatch) => {
    dispatch(getBalancePending());
    try {
      const balanceResult = await api.getBalance({
        headers: {
          'X-API-KEY': p.secret,
        },
      });
      dispatch(getBalanceSuccess(balanceResult));
    } catch (err) {
      dispatch(getBalanceError(err));
    }
  };
}
