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

import * as React from 'react';
import {Children, cloneElement, isValidElement} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

type Props = {
  children: any,
  color: string,
  stroke: number,
};
const styles = StyleSheet.create({
  outline: {
    position: 'absolute',
  },
});

const TextShadow = (props) => {
  const {color, distance, direction, children} = props;

  const createClones = (w: number, h: number, color?: string) => {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        const currentProps = child.props;
        const currentStyle = currentProps ? currentProps.style || {} : {};

        const newProps = {
          ...currentProps,
          style: {
            ...currentStyle,
            textShadowOffset: {
              width: w,
              height: h,
            },
            textShadowColor: color,
            textShadowRadius: 1,
          },
        };
        return cloneElement(child, newProps);
      }
      return child;
    });
  };

  let multX = 0;
  let multY = 0;

  switch (direction) {
    case 0:
      // Top
      multY = 1.2;
      break;
    case 1:
      // Top Right
      multX = 1;
      multY = -1;
      break;
    case 2:
      // Right
      multX = 1;
      break;
    case 3:
      // Bottom Right
      multX = multY = 1;
      break;
    case 4:
      // Bottom
      multY = 1;
      break;
    case 5:
      // Bottom Left
      multX = -1;
      multY = 1;
      break;
    case 6:
      // Left
      multX = -1.2;
      break;
    case 7:
      // Top Left
      multX = multY = -1;
      break;
    default:
      break;
  }

  const clone = createClones(multX * distance, multY * distance, color);

  return <View>{clone}</View>;
};

TextShadow.propTypes = {
  color: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  direction: PropTypes.number.isRequired,
};

export default TextShadow;
