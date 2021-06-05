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
import {Dimensions, Image, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import blurredBackground from '../res/blurred_bg.jpeg';
import logo from '../res/logo.png';

import {getPlayer as getPlayerSelector} from '../redux/selectors';
import {registerPlayer} from '../redux/dispatch';
import PlayerOptions from '../component/PlayerOptions';
import {setPlayerWasGreeted} from '../redux/actions/ui';
import PlayerWelcome from '../component/PlayerWelcome';
import PlayerFromBackup from '../component/PlayerFromBackup';
import {registerPlayerSuccess} from '../redux/actions/api';

const randomNameMaxLength = 18;
const logoScale = 0.75;
const logoWidth = 611;
const logoHeight = 189;

const PlayerSetupView = () => {
  const dispatch = useDispatch();
  const player = useSelector(getPlayerSelector);
  const [isNew, setIsNew] = useState(false);
  const [displayState, setDisplayState] = useState(0);

  const onOptionsOkPress = useCallback(
    (user_name, enableHiScore) => {
      // send to server
      setIsNew(true);
      dispatch(
        registerPlayer({
          user_name,
          enableHiScore,
        }),
      );
    },
    [dispatch],
  );

  const onWelcomeOkPress = useCallback(() => {
    dispatch(setPlayerWasGreeted(true));
  }, [dispatch]);

  const onUseBackupButtonPressed = useCallback(() => {
    setDisplayState(1);
  }, []);

  const onUseBackupButtonOkPressed = useCallback(
    (player) => {
      console.log(player);
      dispatch(registerPlayerSuccess(player));
    },
    [dispatch],
  );

  const onUseBackupButtonCancelPressed = useCallback(() => {
    setDisplayState(0);
  }, [dispatch]);

  useEffect(() => {
    if (
      !player ||
      !player.id ||
      !player.user_name ||
      !player.adminkey ||
      player.user_name === '' ||
      player.adminkey === ''
    ) {
      return;
    }
    setDisplayState(2); // Welcome
  }, [player]);

  useEffect(() => {
    if (player && player.id && isNew) {
      dispatch(setPlayerWasGreeted(true));
    }
  }, [dispatch, player, isNew]);

  return (
    <ImageBackground
      source={blurredBackground}
      style={{
        backgroundColor: '#ff9900',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={logo}
        style={{
          marginBottom: 30,
          width: Math.min(
            Dimensions.get('window').width * logoScale,
            logoWidth,
          ),
          height:
            (Math.min(Dimensions.get('window').width * logoScale, logoWidth) /
              logoWidth) *
            logoHeight,
        }}
      />
      {displayState === 0 && (
        <PlayerOptions
          onOkPressed={onOptionsOkPress}
          showUseBackupButton={true}
          onUseBackupButtonPressed={onUseBackupButtonPressed}
          buttonText={"Let's go!"}
          style={{maxWidth: 350}}
        />
      )}

      {displayState === 1 && (
        <PlayerFromBackup
          onOkPressed={onUseBackupButtonOkPressed}
          onCancelPressed={onUseBackupButtonCancelPressed}
          okButtonText={'Yeah!'}
          cancelButtonText={'Nah!'}
          style={{maxWidth: 350}}
        />
      )}

      {displayState === 2 && (
        <PlayerWelcome
          onOkPressed={onWelcomeOkPress}
          buttonText={'Yes please!'}
          user_name={player.user_name}
          style={{maxWidth: 350}}
        />
      )}
    </ImageBackground>
  );
};

export default PlayerSetupView;
