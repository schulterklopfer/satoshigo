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

import {NativeModules} from 'react-native';

// this will be generated for all API calls which need authentication-
// The result of this method must be written into the X-SIGNED-PLAYERHASH
// header of the HTTP request

// to check if a request is authorized you create a HMAC of the toSign part
// (everything in front of the dot) and check if if equals the part after
// the dot.
// If those two things match and the timestamp is within a reasonable amount
// (5 Minutes or so) the request can be executed

export default async function generateSignedPlayerHash(p) {
  if (!p || !p.secret || !p.hash) {
    return '';
  }

  const toSign = new Date().getTime() + '-' + p.hash;
  return toSign + '.' + (await NativeModules.Aes.hmac256(toSign, p.secret));
}
