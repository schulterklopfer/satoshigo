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

export const SET_APP_STATE = 'SET_APP_STATE';
export const SET_REFERENCE = 'SET_REFERENCE';
export const SET_AR_CAMERA_BEARING = 'SET_AR_CAMERA_BEARING';
export const SET_AR_CAMERA_POSITION = 'SET_AR_CAMERA_POSITION';
export const SET_DEVICE_BEARING = 'SET_DEVICE_BEARING';
export const SET_AR_DEVICE_POSITION = 'SET_AR_DEVICE_POSITION';
export const SET_DEVICE_GEO_LOCATION = 'SET_DEVICE_GEO_LOCATION';

export const SET_CALIBRATION_COMPENSATION = 'SET_CALIBRATION_COMPENSATION';
export const SET_GAME_HASH = 'SET_GAME_HASH';
export const SET_IS_PLAYING = 'SET_IS_PLAYING';
export const SET_PLAYER = 'SET_PLAYER';

export function setAppState(appState) {
  return {
    type: SET_APP_STATE,
    appState: appState,
  };
}

export function setReference(reference) {
  return {
    type: SET_REFERENCE,
    reference: reference,
  };
}

export function setARCameraBearing(arCameraBearing) {
  return {
    type: SET_AR_CAMERA_BEARING,
    arCameraBearing: arCameraBearing,
  };
}

export function setARCameraPosition(position) {
  return {
    type: SET_AR_CAMERA_POSITION,
    arCameraPosition: position,
  };
}

export function setDeviceBearing(bearing) {
  return {
    type: SET_DEVICE_BEARING,
    deviceBearing: bearing,
  };
}

export function setDeviceGeoLocation(geoLocation) {
  return {
    type: SET_DEVICE_GEO_LOCATION,
    geoLocation: geoLocation,
  };
}

export function setARDevicePosition(position) {
  return {
    type: SET_AR_DEVICE_POSITION,
    arDevicePosition: position,
  };
}

export function setCalibrationCompensation(compensation) {
  return {
    type: SET_CALIBRATION_COMPENSATION,
    calibrationCompensation: compensation,
  };
}

export function setGameHash(gameHash) {
  return {
    type: SET_GAME_HASH,
    gameHash: gameHash,
  };
}

export function isPlaying(isPlaying) {
  return {
    type: SET_IS_PLAYING,
    isPlaying: isPlaying,
  };
}

export function setPlayer(player) {
  return {
    type: SET_PLAYER,
    player: player,
  };
}
