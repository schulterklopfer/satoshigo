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

import {StyleSheet} from 'react-native';

export const localStyles = StyleSheet.create({
  // new styles
  mapContainer: {
    position: 'absolute',
    overflow: 'hidden',
    elevation: 16,
    bottom: 0,
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    height: 200,
    width: '100%',
  },
  map: {
    position: 'relative',
    top: 0,
    width: '100%',
    height: '100%',
  },

  gameSelection: {
    borderColor: '#f00',
    borderWidth: 0,
    flexDirection: 'column',
    display: 'flex',
    position: 'absolute',
    top: '5%',
    left: '5%',
    width: '90%',
    height: '90%',
  },

  mbS: {
    marginBottom: 10,
  },

  mb: {
    marginBottom: 30,
  },

  mbL: {
    marginBottom: 50,
  },

  mtS: {
    marginTop: 10,
  },

  mt: {
    marginTop: 30,
  },

  mtL: {
    marginTop: 50,
  },

  gameFont: {
    fontFamily: 'Silkscreen-Expanded',
  },

  gameFontBold: {
    fontFamily: 'Silkscreen-ExpandedBold',
  },

  gameFontSizeSmall: {
    fontSize: 10,
  },

  gameFontSizeRegular: {
    fontSize: 15,
  },

  gameFontSizeLarge: {
    fontSize: 20,
  },

  gameFontSizeExtraLarge: {
    fontSize: 30,
  },

  gameSelectionItem: {
    textAlign: 'center',
    borderColor: '#0f0',
    borderWidth: 1,
  },

  // figment styles
  flex: {
    flex: 1,
  },
  arView: {
    flex: 1,
  },
  listView: {
    flex: 1,
    height: 72,
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: '#000000aa',
  },
  topPhotoBar: {
    backgroundColor: '#000000aa',
    height: 50,
    width: '100%',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneText: {
    textAlign: 'right',
    color: '#d6d6d6',
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    marginRight: 10,
    backgroundColor: '#00000000',
    flex: 1,
  },
  photosText: {
    textAlign: 'center',
    color: '#d6d6d6',
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    backgroundColor: '#00000000',
    flex: 1,
  },
  previewScreenButtons: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewScreenButtonsAddPic: {
    height: 32,
    width: 37,
  },
  previewScreenButtonClose: {
    position: 'absolute',
    height: 23,
    width: 23,
  },
  previewScreenButtonShare: {
    position: 'absolute',
    height: 35,
    width: 35,
  },
  screenIcon: {
    position: 'absolute',
    height: 58,
    width: 58,
  },
  recordIcon: {
    position: 'absolute',
    height: 58,
    width: 58,
    top: 10,
    left: 10,
  },
  cameraIcon: {
    position: 'absolute',
    height: 30,
    width: 30,
    top: 25,
    left: 25,
  },
  recordingTimeText: {
    textAlign: 'center',
    color: '#d6d6d6',
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
  },
  previewPlayButtonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 90,
  },
  previewPlayButton: {
    position: 'absolute',
    height: 90,
    width: 90,
    left: 0,
    alignSelf: 'center',
  },
  previewSavedSuccess: {
    position: 'absolute',
    height: 115,
    width: 100,
    alignSelf: 'center',
  },
  shareScreenContainerTransparent: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'stretch',
  },
  photosSelectorStyle: {
    position: 'absolute',
    width: '100%',
    height: '40%',
    bottom: 0,
  },
});

export const layerStyles = {
  building: {
    fillExtrusionColor: '#aaaaaa',

    fillExtrusionHeight: [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'height'],
    ],

    fillExtrusionBase: [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'min_height'],
    ],
    fillExtrusionOpacity: 0.5,
  },
};
