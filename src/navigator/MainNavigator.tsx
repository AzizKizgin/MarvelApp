import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details, Feed} from '../screens';
import {Text} from 'native-base';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
