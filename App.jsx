/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import NavigationComponent from './Screen/Navigation';
import {NavigationContainer} from '@react-navigation/native';


function App() {
  return (
    <NavigationContainer>
      <NavigationComponent />
    </NavigationContainer>
  );
}


export default App;
