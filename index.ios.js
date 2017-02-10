'use strict';
/* eslint no-console: 0 */

import React, { Component } from 'react';
// import Mapbox, { MapView } from 'react-native-mapbox-gl';
import { AppRegistry, Text } from 'react-native';
import * as MapboxConfig from './config/mapbox-config.js';

const accessToken = MapboxConfig.ACCESS_TOKEN;
// Mapbox.setAccessToken(accessToken);

class MapExample extends Component {
  render() {
    return (
      <Text>Mapbox</Text>
    );
  }
}

AppRegistry.registerComponent('NativeMapbox', () => MapExample);
