/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';
import AppClipNavigation from './Screen/AppClipNavigation';
import {NavigationContainer} from '@react-navigation/native';
import { PropertiesInfoContext } from './Components/Contexts/AllContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


function App() {

    const [ propertiesInfo, setPropertiesInfo ] = useState([])
    useEffect(()=>{
      const check = async()=>{
        try {
          await AsyncStorage.setItem('checking', '1')
        } catch (error) {
          console.log('gave error in saving: ',error)
        }
      }
  
      check()
    }, [])
  return (
    <NavigationContainer>
        <PropertiesInfoContext.Provider value={{ propertiesInfo, setPropertiesInfo }}>
            <AppClipNavigation />
        </PropertiesInfoContext.Provider>
    </NavigationContainer>
  );
}


export default App;
