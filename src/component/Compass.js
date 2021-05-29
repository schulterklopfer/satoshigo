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

import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getDeviceBearing as getDeviceBearingSelector} from '../redux/selectors';

const Compass = (props) => {
  const bearing = useSelector(getDeviceBearingSelector);

  return (
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(0,0,0,0.25)',
        position: 'absolute',
        top: 100,
        left: 100,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 35,
          transform: [{rotate: bearing.toFixed(0) + 'deg'}],
          transformOrigin: [17, 50],
          backgroundColor: '#f00',
          width: 30,
          height: 100,
        }}>
        <View
          style={{
            backgroundColor: '#0f0',
            width: 30,
            height: 15,
            position: 'absolute',
          }}>
          <Text style={{fontSize: 10, textAlign: 'center'}}>{bearing}</Text>
        </View>
      </View>
    </View>
  );
};

export default Compass;
