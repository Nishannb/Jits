import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Login from './Login/Login';
import Home from './Home/Home';
import Recommendation from './Recommendation/Recommendation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import favorite from '../img/favorite.png';
import unfilledFavourite from '../img/unfilledFavourite.png';
import home from '../img/home.png';
import fillhome from '../img/fillhome.png';
import settings from '../img/settings.png';
import unfillsettings from '../img/unfillsettings.png';
import ListTemplate from './ListTemplate/ListTemplate';
import Register from './Register/Register';
import Notification from './Notification/Notification';
import Settings from './Settings/Settings';
import {PropertiesInfoContext} from '../Components/Contexts/AllContext';
import axios from 'axios';
import AddServices from './AddServices/AddServices';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Main = () => {
  const {propertiesInfo, setPropertiesInfo} = useContext(PropertiesInfoContext);

  const fetchPropertyInfo = async() =>{
      // try {
      //   const response = await axios.get('https://3c14-126-36-119-116.ngrok-free.app/getHostDetails')
      //   setPropertiesInfo([response.data])
      // } catch (error) {
      //   console.log(error)
      //   Alert.alert('Something went wrong')
      // }
  }

  useEffect(()=>{
    // Call to load data.
    // fetchPropertyInfo()
  }, [])

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {color: 'white'},
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              {focused ? <Image source={fillhome} /> : <Image source={home} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Recommendation"
        component={Recommendation}
        options={{
          tabBarLabel: 'Recommendation',
          tabBarLabelStyle: {color: 'white'},
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              {focused ? (
                <Image source={favorite} />
              ) : (
                <Image source={unfilledFavourite} />
              )}
            </View>
          ),
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="+"
              color="#000"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {color: 'white'},
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              {focused ? (
                <Image source={settings} />
              ) : (
                <Image source={unfillsettings} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const NavigationComponent = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Register" component={Register} options={{headerShown:false}} /> */}
      {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> */}
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Guides" component={ListTemplate} options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Add Services', {toDisplay: 'Guide'})}
              title="+"
              color="#000"
            />
          ),
        }}/>
      <Stack.Screen
        name="On-Demand Service"
        component={ListTemplate}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Add Services', {toDisplay: 'Rental'})}
              title="+"
              color="#000"
            />
          ),
        }}
      />
      <Stack.Screen name='Add Services' component={AddServices} />

    </Stack.Navigator>
  );
};

export default NavigationComponent;

const styles = StyleSheet.create({
  tabBarIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
