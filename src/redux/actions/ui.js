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

export const AR_TRACKING_INITIALIZED = 'AR_TRACKING_INITIALIZED';
export const SET_UI_STATE = 'SET_UI_STATE';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const SET_HEADER_IS_VISIBLE = 'SET_HEADER_IS_VISIBLE';
export const SET_HEADER_MENU_IS_VISIBLE = 'SET_HEADER_MENU_IS_VISIBLE';
export const SET_STATS_IS_VISIBLE = 'SET_STATS_IS_VISIBLE';
export const SET_PLAYER_WAS_GREETED = 'SET_PLAYER_WAS_GREETED';

// action to show / hide AR Initialization UI to guide user to move device around
export function ARTrackingInitialized(trackingNormal) {
  return {
    type: AR_TRACKING_INITIALIZED,
    trackingNormal: trackingNormal,
  };
}

export function setUIState(uiState) {
  return {
    type: SET_UI_STATE,
    uiState: uiState,
  };
}

export function setNotification(notification) {
  return {
    type: SET_NOTIFICATION,
    notification,
  };
}

export function setHeaderIsVisible(headerIsVisible) {
  return {
    type: SET_HEADER_IS_VISIBLE,
    headerIsVisible,
  };
}

export function setHeaderMenuIsVisible(headerMenuIsVisible) {
  return {
    type: SET_HEADER_MENU_IS_VISIBLE,
    headerMenuIsVisible,
  };
}

export function setStatsIsVisible(statsIsVisible) {
  return {
    type: SET_STATS_IS_VISIBLE,
    statsIsVisible,
  };
}

export function setPlayerWasGreeted(playerWasGreeted) {
  return {
    type: SET_PLAYER_WAS_GREETED,
    playerWasGreeted,
  };
}
