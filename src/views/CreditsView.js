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
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import {localStyles} from '../localStyles';
import TextStroke from '../component/TextStroke';
import TextShadow from '../component/TextShadow';
import escapee from '../res/escapee.jpg';
import benarc from '../res/benarc.jpg';
import louisaalexa from '../res/louisaalexa.jpg';
import bitcoiners from '../res/btcfriendos.png';
import ytMovie from '../res/yt_movie.png';
import heart from '../res/heart.png';
import {setUIState} from '../redux/actions/ui';
import APP_UI_STATES from '../AppUIStates';
import {useDispatch} from 'react-redux';
import closeX from '../res/closeX.png';

const CreditsView = () => {
  const dispatch = useDispatch();

  const renderPicture = (image, name, twitterHandle) => (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL('https://www.twitter.com/' + twitterHandle);
      }}
      style={{
        width: 90,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Image
        source={image}
        style={{
          ...localStyles.mbS,
          borderWidth: 2,
          borderColor: '#ffd320',
          borderRadius: 35,
          width: 70,
          height: 70,
        }}
      />
      <TextStroke color={'#fff'} stroke={1}>
        <Text
          style={{
            ...localStyles.gameFont,
            ...localStyles.gameFontSizeSmall,
            textAlign: 'center',
            color: '#000',
          }}>
          {name}
        </Text>
      </TextStroke>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        backgroundColor: '#ff9900',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
        <TextShadow color={'#ff9900'} distance={3} direction={5}>
          <Text
            style={{
              ...localStyles.mb,
              ...localStyles.gameFont,
              ...localStyles.gameFontSizeLarge,
              textAlign: 'center',
              color: '#fff',
            }}>
            Brought to you with &lt;3 by
          </Text>
        </TextShadow>
        <View
          style={{
            ...localStyles.mb,

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {renderPicture(benarc, 'Ben arc', 'arcbtc')}
          {renderPicture(escapee, 'Escapee', '__escapee__')}
          {renderPicture(louisaalexa, 'Louisa Alexa', 'LouisaAlexa')}
        </View>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=FmW5x0QGjbk');
          }}
          style={{display: 'flex', alignItems: 'center'}}>
          <Image
            source={ytMovie}
            style={{width: 250, height: 138, ...localStyles.mbS}}
          />
          <TextStroke color={'#fff'} stroke={1}>
            <Text
              style={{
                ...localStyles.mbL,
                ...localStyles.gameFont,
                ...localStyles.gameFontSizeSmall,
                maxWidth: 200,
                textAlign: 'center',
                color: '#000',
              }}>
              Inspired by 'The 1Up Fever (2013)'
            </Text>
          </TextStroke>
        </TouchableOpacity>
        <Image
          source={bitcoiners}
          style={{width: 150, height: 65, ...localStyles.mbS}}
        />

        <TextShadow color={'#ff9900'} distance={3} direction={5}>
          <Text
            style={{
              ...localStyles.gameFont,
              ...localStyles.gameFontSizeLarge,
              textAlign: 'center',
              color: '#fff',
            }}>
            Bitcoin is for everyone!
          </Text>
        </TextShadow>

        <View
          style={{
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            ...localStyles.mt,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}>
          <Image source={heart} style={{width: 24, height: 24, margin: 3}} />
          <Image source={heart} style={{width: 24, height: 24, margin: 3}} />
          <Image source={heart} style={{width: 24, height: 24, margin: 3}} />
        </View>
      </View>
      <View
        style={{
          top: 0,
          height: 50,
          width: '100%',
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

export default CreditsView;
