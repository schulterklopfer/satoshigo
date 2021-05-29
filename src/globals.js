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

import {apiHost, useTls, apiHost_dev, useTls_dev, cashoutUrl} from './config';

const API_HOST = apiHost;
const USE_TLS = useTls;

export const CASHOUT_URL = cashoutUrl;

export const API_URL = (USE_TLS ? 'https' : 'http') + '://' + API_HOST;
export const WS_URL = (USE_TLS ? 'wss' : 'ws') + '://' + API_HOST + '/ws';

export const ITEM_CLIENT_STATE_COLLECTABLE = 0;
export const ITEM_CLIENT_STATE_COLLECTING = 1;
export const ITEM_CLIENT_STATE_COLLECTED = 2;
export const ITEM_CLIENT_STATE_REMOVE = 3;

export const AREA_CLIENT_STATE_NONE = 0;
export const AREA_CLIENT_STATE_ACTIVE = 1;
export const AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS = 2;

export const MAX_COLLECT_DISTANCE = 2; // m
export const DONT_RENDER_BEYOND_DISTANCE = 50; // m

export const AREA_FIND_RADIUS = 100; //m
export const MAX_COLLECT_DISTANCE_SQUARED =
  MAX_COLLECT_DISTANCE * MAX_COLLECT_DISTANCE;

export const CAMERA_POSITION_UPDATE_THRESHOLD = 0.5; //m

export const AR_POSITION_OFFSET = -0.5;
export const MIN_AREA_CENTER_DISTANCE = 3;

export const TOO_FAR_AWAY_TEXTS = [
  'Your arms are too short',
  "I can't do that, Dave",
  'That does not work',
  "You're too far away",
  'Move closer',
];

export const COMPENSATION_LP_POSITION_ALPHA = 1.0;
export const COMPENSATION_LP_BEARING_ALPHA = 1.0;
