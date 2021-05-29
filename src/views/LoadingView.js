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
import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import {localStyles} from '../localStyles';
import {Bar} from 'react-native-progress';
import blurredBackground from '../res/blurred_bg.jpeg';
import loadingLogo from '../res/loadinglogo.png';

const logoScale = 0.75;
const logoWidth = 561;
const logoHeight = 486;

const LoadingView = () => {
  return (
    <ImageBackground
      source={blurredBackground}
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={loadingLogo}
        style={{
          width: Math.min(
            Dimensions.get('window').width * logoScale,
            logoWidth,
          ),
          height:
            (Math.min(Dimensions.get('window').width * logoScale, logoWidth) /
              logoWidth) *
            logoHeight,
        }}
      />
      <View
        style={{
          marginTop: '30%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...localStyles.gameFont,
            color: '#ff9900',
            marginBottom: 10,
          }}>
          Loading...
        </Text>
        <Bar
          borderRadius={4}
          indeterminate={true}
          color={'#ff9900'}
          height={20}
          width={Math.min(
            Dimensions.get('window').width * logoScale,
            logoWidth,
          )}
          back
        />
      </View>
    </ImageBackground>
  );
};

export default LoadingView;
