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

import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {localStyles} from '../localStyles';
import RandomAnimatedHuman from '../component/RandomAnimatedHuman';
import {useDispatch, useSelector} from 'react-redux';
import {getPlayerError as getPlayerErrorSelector} from '../redux/selectors';
import {deletePlayer} from '../redux/actions/api';
import {setUIState} from '../redux/actions/ui';
import APP_UI_STATES from '../AppUIStates';

const EnteringGameView = () => {
  const dispatch = useDispatch();
  const playerError = useSelector(getPlayerErrorSelector);

  useEffect(() => {
    if (!playerError) {
      return;
    }
    console.log('------------> no player on backend', playerError);
    dispatch(deletePlayer());
    dispatch(setUIState(APP_UI_STATES.PLAYER_SETUP));
    // error while entering game, delete player data
  }, [dispatch, playerError]);

  return (
    <View
      style={{
        backgroundColor: '#fcb320',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RandomAnimatedHuman
        style={{...localStyles.mbS, transform: [{scale: 0.5}]}}
      />
      <Text style={localStyles.gameFont}>Entering Game</Text>
    </View>
  );
};

export default EnteringGameView;
