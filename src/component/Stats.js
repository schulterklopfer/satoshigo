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
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  getAppState as getAppStateSelector,
  getArCameraPosition as getArCameraPositionSelector,
  getAreas as getAreasSelector,
  getAreasChangedAt as getAreasChangedAtSelector,
  getDeviceGeoLocation as getGeoLocationSelector,
  getGameHash as getGameHashSelector,
  getGames as getGamesSelector,
  getItemsChangedAt as getItemsChangedAtSelector,
  getPlayer as getPlayerSelector,
  getUIState as getUIStateSelector,
} from '../redux/selectors';
import {
  AREA_CLIENT_STATE_ACTIVE,
  AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS,
  ITEM_CLIENT_STATE_COLLECTABLE,
} from '../globals';

const Stats = (props) => {
  const geoLocation = useSelector(getGeoLocationSelector);
  const areas = useSelector(getAreasSelector);
  const areasChangedAt = useSelector(getAreasChangedAtSelector);
  const itemsChangedAt = useSelector(getItemsChangedAtSelector);
  const games = useSelector(getGamesSelector);
  const gameHash = useSelector(getGameHashSelector);
  const player = useSelector(getPlayerSelector);
  const arCameraPosition = useSelector(getArCameraPositionSelector);

  const uiState = useSelector(getUIStateSelector);
  const appState = useSelector(getAppStateSelector);

  return (
    <View
      pointerEvents="none"
      style={{
        padding: 20,
        paddingTop: 55,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderColor: '#f00',
        backgroundColor: 'rgba(255,255,255,0.8)',
      }}>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Text>Total area count: {Object.keys(areas).length}</Text>
        <Text>
          Active area count:{' '}
          {
            Object.entries(areas).filter(([_, area]) => {
              return (
                (area._clientState & AREA_CLIENT_STATE_ACTIVE) ===
                AREA_CLIENT_STATE_ACTIVE
              );
            }).length
          }
        </Text>
        <Text>
          Areas with items:{' '}
          {
            Object.entries(areas).filter(([_, area]) => {
              return (
                (area._clientState & AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS) ===
                AREA_CLIENT_STATE_ITEMS_HAVE_POSITIONS
              );
            }).length
          }
        </Text>
        <Text>Game count: {games.length}</Text>
        <Text>Game hash: {gameHash}</Text>
        <Text>Player: {JSON.stringify(player)}</Text>
        <Text>UI state: {uiState}</Text>
        <Text>App state: {appState}</Text>
        <Text>AR camera: {JSON.stringify(arCameraPosition)}</Text>

        <Text>
          Geo: lon={geoLocation?.longitude}, lat={geoLocation?.latitude}, acc=
          {geoLocation?.accuracy}, course={geoLocation?.course}
        </Text>
        <Text>Areas changed at: {areasChangedAt}</Text>
        <Text>Items changed at: {itemsChangedAt}</Text>

        {Object.entries(areas).map(([areaHash, area]) => {
          if (!area || !area.items) {
            return <Text style={{fontWeight: 'bold'}}>Area {area}</Text>;
          }
          return (
            <View key={area.hash}>
              <Text style={{fontWeight: 'bold'}}>
                Area {areaHash} {area._clientState} active=
                {(area._clientState & AREA_CLIENT_STATE_ACTIVE) ===
                AREA_CLIENT_STATE_ACTIVE
                  ? 'yes'
                  : 'no'}
              </Text>
              <Text> total items: {Object.entries(area?.items).length}</Text>
              <Text>
                {' '}
                collectible items:
                {
                  Object.entries(area?.items).filter(([_, item]) => {
                    return item._clientState === ITEM_CLIENT_STATE_COLLECTABLE;
                  }).length
                }
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Stats;
