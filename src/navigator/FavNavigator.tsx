import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details, Favourites} from '../screens';
const Stack = createNativeStackNavigator();

const FavNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Feed" component={Favourites} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default FavNavigator;
