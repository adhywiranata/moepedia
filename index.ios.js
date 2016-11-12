import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import { App } from './src/App'

const Main = () => <App />

AppRegistry.registerComponent('moeReactNative', () => Main);
