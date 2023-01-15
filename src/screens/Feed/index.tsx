import {Text} from 'react-native';
import React from 'react';
import {Center} from 'native-base';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../.types';
const Feed = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Center
      flex={1}
      _android={{}}
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 0],
          end: [1, 0],
        },
      }}>
      <Text
        onPress={() => {
          navigation.navigate('Details');
        }}>
        fdf
      </Text>
    </Center>
  );
};

export default Feed;
