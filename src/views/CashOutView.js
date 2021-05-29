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
import {
  Dimensions,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {localStyles} from '../localStyles';
import TextStroke from '../component/TextStroke';
import TextShadow from '../component/TextShadow';
import {setUIState} from '../redux/actions/ui';
import APP_UI_STATES from '../AppUIStates';
import {useDispatch, useSelector} from 'react-redux';
import qr from '../res/qr.png';
import closeX from '../res/closeX.png';
import {CASHOUT_URL} from '../globals';
import {getWithdrawId} from '../redux/dispatch';
import {
  getBalance as getBalanceSelector,
  getPlayer as getPlayerSelector,
  getWithdrawId as getWithdrawIdSelector,
} from '../redux/selectors';

const CashOutView = () => {
  const dispatch = useDispatch();

  const withdrawId = useSelector(getWithdrawIdSelector);
  const balance = useSelector(getBalanceSelector);
  const player = useSelector(getPlayerSelector);

  useEffect(() => {
    dispatch(getWithdrawId(player));
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          minHeight: Dimensions.get('window').height,
          backgroundColor: '#ff9900',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {withdrawId && (
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
              marginTop: 60,
            }}>
            <TextShadow color={'#ffd320'} distance={3} direction={5}>
              <Text
                style={{
                  ...localStyles.mbL,
                  ...localStyles.gameFont,
                  ...localStyles.gameFontSizeLarge,
                  textAlign: 'center',
                  color: '#000',
                }}>
                Withdraw {balance} sats
              </Text>
            </TextShadow>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL(new URL(withdrawId, CASHOUT_URL).href);
              }}>
              <Image source={qr} style={{width: 250, height: 250}} />
            </TouchableOpacity>
            <TextStroke color={'#fff'} stroke={1}>
              <Text
                style={{
                  ...localStyles.mt,
                  ...localStyles.gameFont,
                  ...localStyles.gameFontSizeSmall,
                  maxWidth: 200,
                  textAlign: 'center',
                  color: '#000',
                }}>
                Click QR code to withdraw your Satoshis, Or scan it with another
                device to open your browser.
              </Text>
            </TextStroke>
          </View>
        )}

        <View
          style={{
            ...localStyles.mtL,
            padding: 30,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fcb320',
            borderRadius: 20,
            maxWidth: 350,
            marginBottom: 60,
          }}>
          <TextShadow color={'#ffd320'} distance={3} direction={5}>
            <Text
              style={{
                ...localStyles.mb,
                ...localStyles.gameFont,
                ...localStyles.gameFontSizeLarge,
                textAlign: 'center',
                maxWidth: 300,
                color: '#000',
              }}>
              How does this work?
            </Text>
          </TextShadow>

          <Text
            style={{
              ...localStyles.mtS,
              ...localStyles.gameFont,
              ...localStyles.gameFontSizeRegular,
              maxWidth: 300,
              textAlign: 'left',
              color: '#000',
            }}>
            To withdraw your beoved satoshis you will need to install a
            lightning wallet, like bluewallet.
          </Text>
          <Text
            style={{
              ...localStyles.mtS,
              ...localStyles.gameFont,
              ...localStyles.gameFontSizeRegular,
              maxWidth: 300,
              textAlign: 'left',
              color: '#000',
            }}>
            Once you have setup your wallet, follow the weblink by tapping or
            scanning the above QR code
          </Text>
          <Text
            style={{
              ...localStyles.mtS,
              ...localStyles.gameFont,
              ...localStyles.gameFontSizeRegular,
              maxWidth: 300,
              textAlign: 'left',
              color: '#000',
            }}>
            Make sure to write down your seed phrase, and above satoshis are all
            yours.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          height: 50,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(setUIState(APP_UI_STATES.IN_GAME));
          }}>
          <Image
            source={closeX}
            style={{width: 24, height: 24, margin: 20, marginLeft: 20}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CashOutView;
