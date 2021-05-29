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
import React, {useEffect, useState} from 'react';
import AnimatedHuman from './AnimatedHuman';
import PropTypes from 'prop-types';
import {getRandomHuman} from '../helpers/humans';

const RandomAnimatedHuman = (props) => {
  const [human, setHuman] = useState(null);

  useEffect(() => {
    if (human) {
      return;
    }
    const h = getRandomHuman();
    console.log(h);
    setHuman(h);
  }, []);

  return (
    human && (
      <AnimatedHuman style={props.style} human={human} animName={'walk'} />
    )
  );
};

RandomAnimatedHuman.propTypes = {
  style: PropTypes.any,
};

export default RandomAnimatedHuman;
