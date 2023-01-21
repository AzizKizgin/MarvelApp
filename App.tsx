import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import BottomNavigator from './src/navigator/BottomNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const queryClient = new QueryClient();
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
