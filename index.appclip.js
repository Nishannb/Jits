import { AppRegistry, View, Text, Button } from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load REAModule']);


AppRegistry.registerComponent(appName, () => App);