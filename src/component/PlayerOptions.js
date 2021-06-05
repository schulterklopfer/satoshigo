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
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {localStyles} from '../localStyles';
import PropTypes from 'prop-types';
import Button from './Button';
import randomName from '../helpers/randomName';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import TextStroke from './TextStroke';

const randomNameMaxLength = 18;

const PlayerOptions = (props) => {
  const [user_name, setUser_name] = useState('');
  const [enableHiScore, setEnableHiScore] = useState(true);

  useEffect(() => {
    if (props.player) {
      setUser_name(props.player.user_name);
      setEnableHiScore(!!props.player.enableHiScore);
    } else {
      setUser_name(randomName(randomNameMaxLength));
    }
  }, []);

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
      <Text style={{...localStyles.gameFont, ...localStyles.mb}}>
        What do you want to be called?
      </Text>
      <TextInput
        style={{
          ...localStyles.gameFont,
          ...localStyles.gameFontSizeRegular,
          textAlign: 'center',
          width: Dimensions.get('window').width - 120,
          backgroundColor: '#ffd320',
          borderColor: '#fff',
          borderWidth: 1,
        }}
        onEndEditing={this.clearFocus}
        value={user_name}
        placeholder="Handle"
        onChangeText={(h) => setUser_name(h)}
      />
      <Button
        style={{
          ...localStyles.mb,
          marginTop: 10,
          width: Dimensions.get('window').width - 120,
          backgroundColor: '#ff9900',
        }}
        title="Randomize me"
        onPress={() => setUser_name(randomName(randomNameMaxLength))}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BouncyCheckbox
          isChecked={enableHiScore}
          disableText={true}
          onPress={(checked) => setEnableHiScore(checked)}
        />
        <Text
          style={{
            ...localStyles.gameFont,
            ...localStyles.gameFontSizeRegular,
            marginLeft: 10,
            flex: 1,
          }}>
          Show me in the HiScore!
        </Text>
      </View>
      <Button
        style={{
          ...localStyles.mtL,
          backgroundColor: '#2f2',
        }}
        noTextStroke={true}
        title={props.buttonText}
        onPress={() => {
          props.onOkPressed(user_name, enableHiScore);
        }}
      />

      {props.showUseBackupButton && (
        <TouchableOpacity
          style={{
            ...localStyles.mtL,
            backgroundColor: 'rgba(255,255,255,0.25)',
            padding: 10,
            borderRadius: 30,
          }}
          onPress={props.onUseBackupButtonPressed}>
          <TextStroke stroke={1} color={'#fff'}>
            <Text
              style={{
                textAlign: 'center',
                ...localStyles.gameFont,
                ...localStyles.gameFontSizeSmall,
                color: '#000',
              }}>
              {'restore from backup in clipboard '}
            </Text>
          </TextStroke>
        </TouchableOpacity>
      )}
    </View>
  );
};

PlayerOptions.propTypes = {
  onOkPressed: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  showUseBackupButton: PropTypes.bool,
  onUseBackupButtonPressed: PropTypes.func,
  player: PropTypes.any,
  style: PropTypes.any,
};

export default PlayerOptions;
