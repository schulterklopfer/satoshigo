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

const TextStroke = (props) => {
  const {color, stroke, children} = props;

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

  const strokeW = stroke;
  const top = createClones(0, -strokeW * 1.2, color);
  const topLeft = createClones(-strokeW, -strokeW, color);
  const topRight = createClones(strokeW, -strokeW, color);
  const right = createClones(strokeW, 0, color);
  const bottom = createClones(0, strokeW, color);
  const bottomLeft = createClones(-strokeW, strokeW, color);
  const bottomRight = createClones(strokeW, strokeW, color);
  const left = createClones(-strokeW * 1.2, 0, color);

  return (
    <View>
      <View style={styles.outline}>{left}</View>
      <View style={styles.outline}>{right}</View>
      <View style={styles.outline}>{bottom}</View>
      <View style={styles.outline}>{top}</View>
      <View style={styles.outline}>{topLeft}</View>
      <View style={styles.outline}>{topRight}</View>
      <View style={styles.outline}>{bottomLeft}</View>
      {bottomRight}
    </View>
  );
};

TextStroke.propTypes = {
  color: PropTypes.string.isRequired,
  stroke: PropTypes.number.isRequired,
};

export default TextStroke;
