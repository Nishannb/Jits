import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Login from './Login/Login';
import Home from './Home/Home';
import Recommendation from './Recommendation/Recommendation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from '@react-navigation/native';
import favorite from '../img/favorite.png';
import unfilledFavourite from '../img/unfilledFavourite.png'
import home from '../img/home.png';
import fillhome from '../img/fillhome.png';
import ListTemplate from './ListTemplate/ListTemplate';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Main = () =>{
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
                {focused ? <Image source={fillhome} />: <Image source={home} />}
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
                {focused ? <Image source={favorite} />: <Image source={unfilledFavourite} />}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    )
}

const NavigationComponent = () => {

  return (
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> */}
        <Stack.Screen name="Main" component={Main}  options={{headerShown:false}} />
        <Stack.Screen name= "Guides" component={ListTemplate}  />
        <Stack.Screen name= "On-Demand Service" component={ListTemplate} />
      </Stack.Navigator>
  );
};

export default NavigationComponent;


const styles = StyleSheet.create({
    tabBarIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    }
});
