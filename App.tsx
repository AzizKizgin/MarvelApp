import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import BottomNavigator from './src/navigator/BottomNavigator';

const queryClient = new QueryClient();
const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider config={config}>
        <BottomNavigator />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
