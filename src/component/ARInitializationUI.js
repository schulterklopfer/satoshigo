/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SuccessAnimation from './SuccessAnimation';
import {localStyles} from '../localStyles';

/**
 * Component for showing AR initialization UI to user to move device around until AR tracking is initialized
 */
class ARInitializationUI extends React.Component {
  constructor(props) {
    super(props);

    this._setAnimation = this._setAnimation.bind(this);
    this._onSuccessAnimFinished = this._onSuccessAnimFinished.bind(this);
    this.state = {
      initializing_text: 'Slowly move around your device',
    };
  }

  // Method required by lottie-react-native to set the animation in the render() function
  _setAnimation(animation) {
    this.animation = animation;
    if (this.animation != undefined) {
      this.animation.play();
    }
  }
  render() {
    // if AR tracking is not initialized show animation to guide user to move device around
    if (!this.props.arSceneInitialized) {
      return (
        <View
          pointerEvents={'none'}
          style={{
            position: 'absolute',
            top: 70,
            left: 0,
            right: 0,
            width: '100%',
            height: 60,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <SuccessAnimation
            onPress={() => {}}
            stateImageArray={[require('../res/phone.png')]}
            style={{
              height: 60,
              width: 108,
              alignSelf: 'center',
              ...localStyles.mb,
            }}
          />
          <Text
            style={{
              ...localStyles.gameFont,
              ...localStyles.gameFontSizeSmall,
              color: '#000',
              backgroundColor: 'rgba(255,255,255,0.5)',
              padding: 5,
              maxWidth: 200,
              textAlign: 'center',
            }}>
            {this.state.initializing_text}
          </Text>
        </View>
      );
    } else {
      // if AR tracking is initialized show animation for Successfully initialized device
      return (
        <View
          pointerEvents={'none'}
          style={{
            position: 'absolute',
            top: 70,
            left: 0,
            right: 0,
            width: '100%',
            height: 60,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <SuccessAnimation
            onPress={() => {}}
            stateImageArray={[require('../res/icon_initializing_device_2.png')]}
            style={{
              height: 60,
              width: 36,
              alignSelf: 'center',
            }}
          />
        </View>
      );
    }
  }

  // Callback function passed to <SuccessAnimation> component
  // This is so that first time user sees "Initializing ...", later times user sees "Re-Calibrating ...."
  _onSuccessAnimFinished() {
    this.setState({
      initializing_text: 'All done. Have fun!',
    });
  }
}

// Connecting props to redux store
function selectProps(store) {
  return {
    arSceneInitialized: store.ui.arTrackingInitialized,
  };
}

ARInitializationUI.propTypes = {
  style: PropTypes.any,
};

ARInitializationUI.defaultProps = {
  width: 172.075,
  height: 100,
};

export default connect(selectProps)(ARInitializationUI);
