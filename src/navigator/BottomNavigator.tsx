import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Account, Favourites} from '../screens';
import MainNavigator from './MainNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Center, useColorMode} from 'native-base';
import FavNavigator from './FavNavigator';
import theme from '../../Theme';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  const {colorMode} = useColorMode();
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 4,
          height: 65,
          backgroundColor: theme.colors.mainDarkBlue,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Favourites"
        component={FavNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="bookmark"
              size={focused ? 30 : 27}
              color={
                focused ? theme.colors.mainLightBlue : theme.colors.gray[300]
              }
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
              bottom={5}
              borderRadius={'full'}
              borderWidth={5}
              borderColor={
                focused
                  ? '#86a6c5'
                  : colorMode === 'dark'
                  ? 'dark.50'
                  : 'gray.300'
              }
              backgroundColor={'mainDarkBlue'}
              w={65}
              h={65}>
              <Icon
                name="home"
                size={focused ? 35 : 27}
                color={
                  focused ? theme.colors.mainLightBlue : theme.colors.gray[300]
                }
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
              color={
                focused ? theme.colors.mainLightBlue : theme.colors.gray[300]
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
