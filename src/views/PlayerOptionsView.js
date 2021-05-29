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

import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPlayer as getPlayerSelector} from '../redux/selectors';
import {updatePlayer} from '../redux/dispatch';
import PlayerOptions from '../component/PlayerOptions';
import closeX from '../res/closeX.png';
import {setNotification, setUIState} from '../redux/actions/ui';
import APP_UI_STATES from '../AppUIStates';
import {localStyles} from '../localStyles';
import createPlayerBackup from '../helpers/createPlayerBackup';
import TextStroke from '../component/TextStroke';
import Clipboard from '@react-native-clipboard/clipboard';

const PlayerOptionsView = () => {
  const dispatch = useDispatch();
  const player = useSelector(getPlayerSelector);

  const [backupString, setBackupString] = useState();

  const onOkPress = useCallback(
    (handle, enableHiScore) => {
      console.log(handle, enableHiScore);
      // send to server
      dispatch(
        updatePlayer(
          {
            handle,
            enableHiScore,
          },
          player,
        ),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    setBackupString(createPlayerBackup(player));
  }, []);

  return (
    <View
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: '#ff9900',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flex: 1}}>
        <View
          style={{
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 20,
            width: Dimensions.get('window').width,
          }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(setUIState(APP_UI_STATES.IN_GAME));
              console.log('close pressed');
            }}>
            <Image
              source={closeX}
              style={{width: 24, height: 24, margin: 20, marginLeft: 20}}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <PlayerOptions
              player={player}
              onOkPressed={onOkPress}
              buttonText={'Change it!'}
              style={{maxWidth: 350, ...localStyles.mb}}
            />
            <View
              style={{
                padding: 30,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fcb320',
                borderRadius: 20,
                maxWidth: 350,
              }}>
              <Text
                style={{
                  ...localStyles.gameFont,
                  ...localStyles.mb,
                }}>
                This string is a backup of your player data. Click it to copy it
                to the clipboard.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Clipboard.setString(backupString);
                  dispatch(
                    setNotification({
                      text: 'Copied to clipboard',
                      opacity: 1,
                      color: 'rgba(255,0,255,0.5)',
                    }),
                  );
                }}>
                <TextStroke color={'#fff'} stroke={1}>
                  <Text style={{...localStyles.gameFont}}>{backupString}</Text>
                </TextStroke>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PlayerOptionsView;
