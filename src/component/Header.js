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

import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Button from './Button';
import menu from '../res/menu.png';
import GameMenu from './GameMenu';
import {useDispatch, useSelector} from 'react-redux';
import {
  getBalance as getBalanceSelector,
  getHeaderMenuIsVisible as getHeaderMenuIsVisibleSelector,
} from '../redux/selectors';
import {setHeaderMenuIsVisible, setUIState} from '../redux/actions';
import APP_UI_STATES from '../AppUIStates';

const Header = (props) => {
  const dispatch = useDispatch();

  const balance = useSelector(getBalanceSelector);
  const headerMenuIsVisible = useSelector(getHeaderMenuIsVisibleSelector);

  return (
    <View
      style={{
        position: 'absolute',
        display: 'flex',
        width: '100%',
        height: '100%',
      }}>
      {!headerMenuIsVisible && (
        <View
          style={{
            position: 'absolute',
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: 50,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              maxWidth: 50,
              height: 50,
              margin: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              console.log('show menu');
              dispatch(setHeaderMenuIsVisible(true));
            }}>
            <Image source={menu} style={{width: 24, height: 24, margin: 15}} />
          </TouchableOpacity>
          <Button
            style={{
              flex: 2,
              margin: 2,
              marginLeft: 15,
              marginRight: 65,
              backgroundColor: 'transparent',
            }}
            title={balance ? '+' + balance + ' sats' : 'ZERO SATS!'}
            subtitle={balance ? 'Click here to withdraw' : null}
            onPress={() => {
              if (balance) {
                dispatch(setUIState(APP_UI_STATES.CASH_OUT));
              }
            }}
          />
        </View>
      )}
      {headerMenuIsVisible && (
        <GameMenu
          onClosePressed={(e) => {
            console.log('close menu');
            dispatch(setHeaderMenuIsVisible(false));
          }}
        />
      )}
    </View>
  );
};

export default Header;
