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
import {Text, TouchableOpacity, View} from 'react-native';
import TextStroke from './TextStroke';
import PropTypes from 'prop-types';
import {localStyles} from '../localStyles';

const Button = (props) => {
  const styles = [
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
  ];

  if (props.style) {
    styles.push(props.style);
  }

  return (
    <TouchableOpacity
      style={styles}
      onPress={props.onPress}
      disabled={props.disabled}>
      <View
        style={{
          margin: 0,
          padding: 15,
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'center',
        }}>
        {props.noTextStroke ? (
          <Text
            style={{
              ...localStyles.gameFont,
              ...localStyles.gameFontSizeLarge,
              color: '#000',
            }}>
            {props.title}
          </Text>
        ) : (
          <View style={{display: 'flex', alignItems: 'center'}}>
            <TextStroke stroke={1} color={'#fff'}>
              <Text
                style={{
                  ...localStyles.gameFont,
                  ...localStyles.gameFontSizeLarge,
                  color: '#000',
                }}>
                {props.title}
              </Text>
            </TextStroke>
          </View>
        )}
        {props.subtitle && (
          <Text
            style={{
              ...localStyles.gameFont,
              ...localStyles.gameFontSizeSmall,
              ...localStyles.mtS,
              textAlign: 'center',
              color: '#000',
            }}>
            {props.subtitle}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  noTextStroke: PropTypes.bool,
  style: PropTypes.any,
};

export default Button;
