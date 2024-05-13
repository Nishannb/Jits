/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import NavigationComponent from './Screen/Navigation';
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
        <NavigationComponent />
      </PropertiesInfoContext.Provider>
    </NavigationContainer>
  );
}


export default App;
