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
import {localStyles} from '../localStyles';
import PropTypes from 'prop-types';
import Button from './Button';

const PlayerOptions = (props) => {
  return (
    <View
      style={{
        ...props.style,
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcb320',
        borderRadius: 20,
      }}>
      <Text
        style={{
          ...localStyles.gameFont,
          ...localStyles.gameFontSizeLarge,
          ...localStyles.mb,
        }}>
        Welcome back {props.handle}!
      </Text>
      <Text style={{...localStyles.gameFont, ...localStyles.mb}}>
        Ready to find some more sats?
      </Text>

      <Button
        style={{
          ...localStyles.mtL,
          backgroundColor: '#2f2',
        }}
        noTextStroke={true}
        title={props.buttonText}
        onPress={props.onOkPressed}
      />
    </View>
  );
};

PlayerOptions.propTypes = {
  onOkPressed: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  style: PropTypes.any,
  handle: PropTypes.string.isRequired,
};

export default PlayerOptions;
