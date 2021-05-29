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
import {ViroMaterials, ViroNode, ViroQuad} from 'react-viro';
import PropTypes from 'prop-types';
import {DONT_RENDER_BEYOND_DISTANCE, MAX_COLLECT_DISTANCE} from '../globals';

ViroMaterials.createMaterials({
  inner: {
    diffuseColor: '#ff0000',
    cullMode: 'None',
  },
  outer: {
    diffuseColor: '#000000',
    cullMode: 'None',
  },
});

const ViroDistanceLabel = (props) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let p =
      1 -
      (Math.sqrt(props.squaredDistance) - MAX_COLLECT_DISTANCE) /
        (DONT_RENDER_BEYOND_DISTANCE - MAX_COLLECT_DISTANCE);

    p -= 2 * props.border;

    if (p < 0) {
      p = 0;
    }

    if (p > 1) {
      p = 1;
    }
    setProgress(p);
  }, [setProgress, props.border, props.squaredDistance]);

  return (
    <ViroNode position={props.position} transformBehaviors="billboard">
      <ViroQuad
        materials={['outer']}
        scale={[props.width, props.height, 1]}
        position={[0, 0, 0]}
      />

      <ViroQuad
        materials={['inner']}
        scale={[progress * props.width, props.height - props.border, 1]}
        position={[-0.5 + progress * 0.5 + props.border, 0, 0.1]}
      />
    </ViroNode>
  );
};

ViroDistanceLabel.propTypes = {
  squaredDistance: PropTypes.number.isRequired,
  position: PropTypes.array.isRequired,
  border: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ViroDistanceLabel;
