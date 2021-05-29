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

export const REGISTER_PLAYER_PENDING = 'REGISTER_PLAYER_PENDING';
export const REGISTER_PLAYER_SUCCESS = 'REGISTER_PLAYER_SUCCESS';
export const REGISTER_PLAYER_ERROR = 'REGISTER_PLAYER_ERROR';

export const UPDATE_PLAYER_PENDING = 'UPDATE_PLAYER_PENDING';
export const UPDATE_PLAYER_SUCCESS = 'UPDATE_PLAYER_SUCCESS';
export const UPDATE_PLAYER_ERROR = 'UPDATE_PLAYER_ERROR';

export const DELETE_PLAYER = 'DELETE_PLAYER';

export const GET_MY_PLAYER_PENDING = 'GET_MY_PLAYER_PENDING';
export const GET_MY_PLAYER_SUCCESS = 'GET_MY_PLAYER_SUCCESS';
export const GET_MY_PLAYER_ERROR = 'GET_MY_PLAYER_ERROR';

export const GET_GAMES_PENDING = 'GET_GAMES_PENDING';
export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS';
export const GET_GAMES_ERROR = 'GET_GAMES_ERROR';

export const ENTER_GAME_PENDING = 'ENTER_GAME_PENDING';
export const ENTER_GAME_SUCCESS = 'ENTER_GAME_SUCCESS';
export const ENTER_GAME_ERROR = 'ENTER_GAME_ERROR';

export const REMOVE_COLLECTED_ITEM = 'REMOVE_COLLECTED_ITEM';
export const RESET_COLLECTED_ITEMS_ARRAY = 'RESET_COLLECTED_ITEMS_ARRAY';

export const GET_AREAS_PENDING = 'GET_AREAS_PENDING';
export const GET_AREAS_SUCCESS = 'GET_AREAS_SUCCESS';
export const GET_AREAS_ERROR = 'GET_AREAS_ERROR';

export const GET_AREA_PENDING = 'GET_AREA_PENDING';
export const GET_AREA_SUCCESS = 'GET_AREA_SUCCESS';
export const GET_AREA_ERROR = 'GET_AREA_ERROR';

export const FIND_AREAS_PENDING = 'FIND_AREAS_PENDING';
export const FIND_AREAS_SUCCESS = 'FIND_AREAS_SUCCESS';
export const FIND_AREAS_ERROR = 'FIND_AREAS_ERROR';

export const GET_ITEM_PENDING = 'GET_ITEM_PENDING';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_ERROR = 'GET_ITEM_ERROR';
export const SET_ITEM_CLIENT_STATE = 'SET_ITEM_CLIENT_STATE';
export const SET_AREA_CLIENT_STATE = 'SET_AREA_CLIENT_STATE';

export const COLLECT_ITEM_PENDING = 'COLLECT_ITEM_PENDING';
export const COLLECT_ITEM_SUCCESS = 'COLLECT_ITEM_SUCCESS';
export const COLLECT_ITEM_ERROR = 'COLLECT_ITEM_ERROR';

export const GET_HISCORE_PENDING = 'GET_HISCORE_PENDING';
export const GET_HISCORE_SUCCESS = 'GET_HISCORE_SUCCESS';
export const GET_HISCORE_ERROR = 'GET_HISCORE_ERROR';

export const GET_BALANCE_PENDING = 'GET_BALANCE_PENDING';
export const GET_BALANCE_SUCCESS = 'GET_BALANCE_SUCCESS';
export const GET_BALANCE_ERROR = 'GET_BALANCE_ERROR';

export const SET_BALANCE = 'SET_BALANCE';
export const INCREASE_BALANCE_BY = 'INCREASE_BALANCE_BY';

export const GET_WITHDRAW_ID_PENDING = 'GET_WITHDRAW_ID_PENDING';
export const GET_WITHDRAW_ID_SUCCESS = 'GET_WITHDRAW_ID_SUCCESS';
export const GET_WITHDRAW_ID_ERROR = 'GET_WITHDRAW_ID_ERROR';

export const TRIGGER_ITEMS_CHANGED = 'TRIGGER_ITEMS_CHANGED';

export function registerPlayerPending() {
  return {
    type: REGISTER_PLAYER_PENDING,
  };
}

export function registerPlayerSuccess(player) {
  return {
    type: REGISTER_PLAYER_SUCCESS,
    data: player,
  };
}

export function registerPlayerError(error) {
  return {
    type: REGISTER_PLAYER_ERROR,
    error: error,
  };
}

export function updatePlayerPending() {
  return {
    type: UPDATE_PLAYER_PENDING,
  };
}

export function updatePlayerSuccess(player) {
  return {
    type: UPDATE_PLAYER_SUCCESS,
    data: player,
  };
}

export function updatePlayerError(error) {
  return {
    type: UPDATE_PLAYER_ERROR,
    error: error,
  };
}

export function getMyPlayerPending() {
  return {
    type: GET_MY_PLAYER_PENDING,
  };
}

export function getMyPlayerSuccess(player) {
  return {
    type: GET_MY_PLAYER_SUCCESS,
    data: player,
  };
}

export function getMyPlayerError(error) {
  return {
    type: GET_MY_PLAYER_ERROR,
    error: error,
  };
}

export function deletePlayer() {
  return {
    type: DELETE_PLAYER,
  };
}

export function removeCollectedItem(itemHash, areaHash) {
  return {
    type: REMOVE_COLLECTED_ITEM,
    itemHash,
    areaHash,
  };
}

export function resetCollectedItemsArray() {
  return {
    type: RESET_COLLECTED_ITEMS_ARRAY,
  };
}

export function getItemPending() {
  return {
    type: GET_ITEM_PENDING,
  };
}

export function getItemSuccess(item) {
  return {
    type: GET_ITEM_SUCCESS,
    data: item,
  };
}

export function getItemError(error) {
  return {
    type: GET_ITEM_ERROR,
    error: error,
  };
}

export function getAreasPending() {
  return {
    type: GET_AREAS_PENDING,
  };
}

export function getAreasSuccess(areas) {
  return {
    type: GET_AREAS_SUCCESS,
    data: areas,
  };
}

export function getAreasError(error) {
  return {
    type: GET_AREAS_ERROR,
    error: error,
  };
}

export function getAreaPending() {
  return {
    type: GET_AREA_PENDING,
  };
}

export function getAreaSuccess(area) {
  return {
    type: GET_AREA_SUCCESS,
    data: area,
  };
}

export function getAreaError(error) {
  return {
    type: GET_AREA_ERROR,
    error: error,
  };
}

export function enterGamePending() {
  return {
    type: ENTER_GAME_PENDING,
  };
}

export function enterGameSuccess(game) {
  return {
    type: ENTER_GAME_SUCCESS,
    data: game,
  };
}

export function enterGameError(error) {
  return {
    type: ENTER_GAME_ERROR,
    error: error,
  };
}

export function getGamesPending() {
  return {
    type: GET_GAMES_PENDING,
  };
}

export function getGamesSuccess(games) {
  return {
    type: GET_GAMES_SUCCESS,
    data: games,
  };
}

export function getGamesError(error) {
  return {
    type: GET_GAMES_ERROR,
    error: error,
  };
}

export function findAreasPending() {
  return {
    type: FIND_AREAS_PENDING,
  };
}

export function findAreasSuccess(areas) {
  return {
    type: FIND_AREAS_SUCCESS,
    data: areas,
  };
}

export function findAreasError(error) {
  return {
    type: FIND_AREAS_ERROR,
    error: error,
  };
}

export function collectItemPending() {
  return {
    type: COLLECT_ITEM_PENDING,
  };
}

export function collectItemSuccess(data) {
  return {
    type: COLLECT_ITEM_SUCCESS,
    data: data,
  };
}

export function collectItemError(error) {
  return {
    type: COLLECT_ITEM_ERROR,
    error: error,
  };
}

export function getHiScorePending() {
  return {
    type: GET_HISCORE_PENDING,
  };
}

export function getHiScoreSuccess(hiScore) {
  return {
    type: GET_HISCORE_SUCCESS,
    data: hiScore,
  };
}

export function getHiScoreError(error) {
  return {
    type: GET_HISCORE_ERROR,
    error: error,
  };
}

export function getBalancePending() {
  return {
    type: GET_BALANCE_PENDING,
  };
}

export function getBalanceSuccess(balance) {
  return {
    type: GET_BALANCE_SUCCESS,
    data: balance,
  };
}

export function getBalanceError(error) {
  return {
    type: GET_BALANCE_ERROR,
    error: error,
  };
}

export function setBalance(sats) {
  return {
    type: SET_BALANCE,
    sats: sats,
  };
}

export function increaseBalanceBy(sats) {
  return {
    type: INCREASE_BALANCE_BY,
    sats: sats,
  };
}

export function getWithdrawIdPending() {
  return {
    type: GET_WITHDRAW_ID_PENDING,
  };
}

export function getWithdrawIdSuccess(data) {
  return {
    type: GET_WITHDRAW_ID_SUCCESS,
    data: data,
  };
}

export function getWithdrawIdError(error) {
  return {
    type: GET_WITHDRAW_ID_ERROR,
    error: error,
  };
}

export function setItemClientState(areaHash, itemHash, state) {
  return {
    type: SET_ITEM_CLIENT_STATE,
    areaHash,
    itemHash,
    state,
  };
}

export function setAreaClientState(areaHash, state, action) {
  action = action || 'set';
  return {
    type: SET_AREA_CLIENT_STATE,
    action,
    areaHash,
    state,
  };
}

export function triggerItemsChanged() {
  return {
    type: TRIGGER_ITEMS_CHANGED,
  };
}
