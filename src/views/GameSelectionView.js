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

import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import {localStyles} from '../localStyles';
import React from 'react';
import {setGameHash} from '../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {getGames as getGamesSelector} from '../redux/selectors';
import Button from '../component/Button';
import blurredBackground from '../res/blurred_bg.jpeg';
import logo from '../res/logo.png';

const logoScale = 0.75;
const logoWidth = 611;
const logoHeight = 189;

const GameSelectionView = () => {
  const dispatch = useDispatch();
  const games = useSelector(getGamesSelector);

  return (
    <ImageBackground
      source={blurredBackground}
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#f2a900',
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
      <View
        style={{
          maxWidth: 350,
          padding: 30,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ff9900',
          borderRadius: 20,
        }}>
        <Text
          style={{
            ...localStyles.gameFont,
            ...localStyles.mb,
            ...localStyles.gameFontSizeLarge,
          }}>
          Choose a game around your area.
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          {games.map((game) => (
            <Button
              key={game.hash}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                ...localStyles.mbS,
              }}
              onPress={() => dispatch(setGameHash(game.hash))}
              title={game.title}
              subtitle={game.description}
            />
          ))}
        </View>
        <Text
          style={{
            ...localStyles.gameFont,
            ...localStyles.mb,
            marginTop: 30,
          }}>
          Wanna spread some love? You can always:
        </Text>
        <Button
          style={{
            backgroundColor: '#2f2',
            borderRadius: 25,
          }}
          onPress={() => {
            console.log('go to funding page now!');
          }}
          title={'Fund a game'}
          noTextStroke={true}
        />
      </View>
    </ImageBackground>
  );
};

export default GameSelectionView;
