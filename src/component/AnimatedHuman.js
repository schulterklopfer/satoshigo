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

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';

class AnimatedHuman extends Component {
  animName;
  animType;
  frames;
  frameCount;
  frameTime;
  animTimeout;
  animDirection = 1;
  useExternalTimer = false;

  constructor(props) {
    super(props);
    this.animateStep = this.animateStep.bind(this);

    this.state = {
      displayFrame: 0,
    };
  }

  animateStep() {
    let frameIndex = this.state.displayFrame;
    if (this.animType === 'forward') {
      frameIndex += 1;
      if (frameIndex >= this.frameCount) {
        frameIndex = 0;
      }
    } else {
      frameIndex += this.animDirection;
      if (frameIndex >= this.frameCount) {
        frameIndex = this.frameCount - 2;
        this.animDirection = -1;
      } else if (frameIndex < 0) {
        frameIndex = 1;
        this.animDirection = 1;
      }
    }

    this.setState({
      displayFrame: frameIndex,
    });

    if (!this.useExternalTimer) {
      this.animTimeout = setTimeout(this.animateStep, this.frameTime);
    }
  }

  componentDidMount() {
    this.animName = this.props.animName;
    this.animType = this.props.human.anims[this.animName].animType;
    this.frames = this.props.human.anims[this.animName].frames;
    this.frameCount = this.frames.length;
    this.frameTime = this.props.human.anims[this.animName].frameTime;
    this.useExternalTimer = this.props.useExternalTimer;
    if (!this.useExternalTimer) {
      this.animTimeout = setTimeout(this.animateStep, this.frameTime);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.animTimeout);
  }

  render() {
    return (
      <View
        style={{
          width:
            this.props.human.anims[this.props.animName].frames[
              this.state.displayFrame
            ].width,
          height:
            this.props.human.anims[this.props.animName].frames[
              this.state.displayFrame
            ].height,
          overflow: 'hidden',
          ...this.props.style,
        }}>
        <Image
          source={this.props.human.anims[this.props.animName].source}
          //resizeMode={'contain'}
          style={{
            borderWidth: 2,
            borderColor: '#0f0',
            width: this.props.human.anims[this.props.animName].dimensions.width,
            height:
              this.props.human.anims[this.props.animName].dimensions.height,
            transform: [
              {
                translate: [
                  -this.props.human.anims[this.props.animName].frames[
                    this.state.displayFrame
                  ].x,
                  -this.props.human.anims[this.props.animName].frames[
                    this.state.displayFrame
                  ].y,
                ],
              },
            ],
          }}
        />
      </View>
    );
  }
}

AnimatedHuman.propTypes = {
  style: PropTypes.any,
  human: PropTypes.any.isRequired,
  animName: PropTypes.string.isRequired,
  useExternalTimer: PropTypes.bool,
};

export default AnimatedHuman;

/*
const AnimatedHuman = (props) => {
  const [displayFrame, setDisplayFrame] = useState(0);

  const animDirection = useRef(1);
  const frameIndex = useRef(0);
  const human = props.human;
  const animName = props.animName;
  const useExternalTimer = props.useExternalTimer;

  useEffect(() => {
    const animType = human.anims[animName].animType;
    const frames = human.anims[animName].frames;
    const frameCount = frames.length;
    const frameTime = human.anims[animName].frameTime;
    let animTimeout;
    const animateStep = () => {
      if (animType === 'forward') {
        frameIndex.current += 1;
        if (frameIndex.current >= frameCount) {
          frameIndex.current = 0;
        }
      } else {
        frameIndex.current += animDirection.current;
        if (frameIndex.current >= frameCount) {
          frameIndex.current = frameCount - 2;
          animDirection.current = -1;
        } else if (frameIndex.current < 0) {
          frameIndex.current = 1;
          animDirection.current = 1;
        }
      }
      setDisplayFrame(frameIndex.current);
      if (!useExternalTimer) {
        animTimeout = setTimeout(animateStep, frameTime);
      }
    };
    if (!useExternalTimer) {
      animTimeout = setTimeout(animateStep, frameTime);
    }

    return () => {
      clearTimeout(animTimeout);
    };
  }, [animDirection, frameIndex, animName, human, useExternalTimer]);

  return (
    <View
      style={{
        width: props.human.anims[props.animName].frames[displayFrame].width,
        height: props.human.anims[props.animName].frames[displayFrame].height,
        overflow: 'hidden',
        ...props.style,
      }}>
      <Image
        source={props.human.anims[props.animName].source}
        resizeMode={'contain'}
        style={{
          width: props.human.anims[props.animName].dimensions.width,
          height: props.human.anims[props.animName].dimensions.height,
          transform: [
            {
              translate: [
                -props.human.anims[props.animName].frames[displayFrame].x,
                -props.human.anims[props.animName].frames[displayFrame].y,
              ],
            },
          ],
        }}
      />
    </View>
  );
};
*/
