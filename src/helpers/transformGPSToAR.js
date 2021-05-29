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

import {Platform} from 'react-native';
import lonLatToMerc from './lonLatToMerc';

export default function transformGpsToAR(
  originLon,
  originLat,
  degree,
  lon,
  lat,
) {
  const isAndroid = Platform.OS === 'android';

  const toTransformPoint = lonLatToMerc(lon, lat);
  const originPoint = lonLatToMerc(originLon, originLat);
  const deltaY = toTransformPoint.y - originPoint.y;
  const deltaX = toTransformPoint.x - originPoint.x;

  if (isAndroid) {
    let angleRadian = (degree * Math.PI) / 180;
    return {
      x: deltaX * Math.cos(angleRadian) - deltaY * Math.sin(angleRadian),
      z: -deltaX * Math.sin(angleRadian) + deltaY * Math.cos(angleRadian),
    };
  }

  return {x: deltaX, z: -deltaY};
}
