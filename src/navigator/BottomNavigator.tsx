import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Account, Favourites} from '../screens';
import MainNavigator from './MainNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Center} from 'native-base';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 4,
          height: 60,
          backgroundColor: '#405b67',
          borderRadius: 10,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="bookmark"
              size={focused ? 30 : 27}
              color={focused ? '#86a6c5' : 'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Center
              position={'absolute'}
              bottom={3}
              borderRadius={50}
              borderWidth={5}
              borderColor={focused ? '#86a6c5' : 'white'}
              bg={'#405b67'}
              w={65}
              h={65}>
              <Icon
                name="home"
                size={focused ? 35 : 27}
                color={focused ? '#86a6c5' : 'white'}
              />
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="settings-sharp"
              size={focused ? 30 : 27}
              color={focused ? '#86a6c5' : 'white'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
