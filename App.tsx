import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Feed from './src/screens/Feed';
import Detail from './src/screens/Detail';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Feed} />
            <Stack.Screen name="Details" component={Detail} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
