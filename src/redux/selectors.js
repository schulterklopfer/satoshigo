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

export const getGames = (state) => state.games.data;
export const getGamesPending = (state) => state.games.pending;
export const getGamesError = (state) => state.games.error;

export const getAreas = (state) => state.items.areas;
export const getAreasChangedAt = (state) => state.items.areasChangedAt;
export const getItemsChangedAt = (state) => state.items.itemsChangedAt;

export const getItemsPending = (state) => state.items.pending;
export const getItemsChanged = (state) => state.items.changed;
export const getItemsError = (state) => state.items.error;

export const getPlayer = (state) => state.player.data;
export const getPlayerPending = (state) => state.player.pending;
export const getPlayerError = (state) => state.player.error;
export const getIsPlaying = (state) => !!state.player.data.gameHash;

export const getReference = (state) => state.app.reference;
export const getAppState = (state) => state.app.appState;
export const getDeviceBearing = (state) => state.app.deviceBearing;
export const getDeviceGeoLocation = (state) => state.app.deviceGeoLocation;
export const getArCameraBearing = (state) => state.app.arCameraBearing;
export const getArCameraPosition = (state) => state.app.arCameraPosition;
export const getArDevicePosition = (state) => state.app.arDevicePosition;

export const getCalibrationCompensation = (state) =>
  state.app.calibrationCompensation;
export const getGameHash = (state) => state.app.gameHash;

export const getUIState = (state) => state.ui.uiState;
export const getTrackingState = (state) => state.ui.trackingNormal;
export const getNotification = (state) => state.ui.notification;
export const getHeaderIsVisible = (state) => state.ui.headerIsVisible;
export const getHeaderMenuIsVisible = (state) => state.ui.headerMenuIsVisible;
export const getStatsIsVisible = (state) => state.ui.statsIsVisible;
export const getPlayerWasGreeted = (state) => state.ui.playerWasGreeted;

export const getWithdrawId = (state) => state.withdrawId.data;

export const getBalance = (state) => state.balance.data;
export const getBalanceWithdrawId = (state) => state.withdrawId.data;
export const getBalanceWithdrawIdError = (state) => state.withdrawId.error;
export const getBalanceWithdrawIdPending = (state) => state.withdrawId.pending;
