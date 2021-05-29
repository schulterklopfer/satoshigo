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

import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {localStyles} from '../localStyles';
import PropTypes from 'prop-types';
import Button from './Button';
import Clipboard from '@react-native-clipboard/clipboard';
import {setNotification} from '../redux/actions/ui';
import {useDispatch} from 'react-redux';
import createPlayerStubFromBackup from '../helpers/createPlayerStubFromBackup';
import generateSignedPlayerHash from '../helpers/generateSignedPlayerHash';
import {api} from '../redux/dispatch';

const PlayerFromBackup = (props) => {
  const intervalRef = useRef();
  const [clipboardContent, setClipboardContent] = useState();
  const [player, setPlayer] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      intervalRef.current = setInterval(async () => {
        const cb = await Clipboard.getString();
        if (cb && cb !== clipboardContent) {
          setClipboardContent(cb);
        }
      });

      return () => {
        clearInterval(intervalRef.current);
      };
    })();
  }, []);

  useEffect(() => {
    if (!clipboardContent) {
      return;
    }

    try {
      const p = createPlayerStubFromBackup(clipboardContent);
      if (p) {
        p.handle = '';
        (async () => {
          try {
            const signedPlayerHash = await generateSignedPlayerHash(p);
            const playerResult = await api.findMe({
              headers: {
                'X-SIGNED-PLAYERHASH': signedPlayerHash,
              },
            });
            console.log(JSON.stringify(playerResult, null, 2));
            setPlayer(playerResult);
          } catch (e) {
            dispatch(
              setNotification({
                text: 'Could not find backup in Clipboard.',
                color: 'rgba(255,0,0,0.5)',
              }),
            );
          }
        })();
      } else {
        dispatch(
          setNotification({
            text: 'Could not find backup in Clipboard.',
            color: 'rgba(255,0,0,0.5)',
          }),
        );
      }
    } catch (e) {
      dispatch(
        setNotification({
          text: 'Could not find backup in Clipboard.',
          color: 'rgba(255,0,0,0.5)',
        }),
      );
    }
  }, [clipboardContent]);

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
        {player ? 'Is this you?' : 'No backup found'}
      </Text>
      {player && (
        <Text
          style={{
            ...localStyles.gameFont,
            ...localStyles.gameFontSizeRegular,
          }}>
          {player.handle}
        </Text>
      )}

      <View
        style={{
          ...localStyles.mtL,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          style={{
            marginRight: 5,
            backgroundColor: '#f22',
          }}
          noTextStroke={true}
          title={props.cancelButtonText}
          onPress={props.onCancelPressed}
        />
        <Button
          style={{
            marginLeft: 5,
            opacity: player ? 1 : 0.25,
            backgroundColor: player ? '#2f2' : '#c3c3c3',
          }}
          disabled={!player}
          noTextStroke={true}
          title={props.okButtonText}
          onPress={() => props.onOkPressed(player)}
        />
      </View>
    </View>
  );
};

PlayerFromBackup.propTypes = {
  onOkPressed: PropTypes.func.isRequired,
  onCancelPressed: PropTypes.func.isRequired,
  okButtonText: PropTypes.string.isRequired,
  cancelButtonText: PropTypes.string.isRequired,
  style: PropTypes.any,
};

export default PlayerFromBackup;
