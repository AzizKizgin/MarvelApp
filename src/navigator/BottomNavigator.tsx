import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Feed from '../screens/Feed';
import MainNavigator from './MainNavigator';

const Tab = createMaterialBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favourites" component={Feed} />
      <Tab.Screen name="Home" component={MainNavigator} />
      <Tab.Screen name="Account" component={Feed} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
