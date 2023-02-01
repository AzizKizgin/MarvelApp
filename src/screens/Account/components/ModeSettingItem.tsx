import {HStack, Icon, Switch, Text} from 'native-base';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ModeSettingItem = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <HStack justifyContent={'space-between'} marginTop={4}>
      {isDarkMode ? (
        <HStack space={2} justifyContent={'center'} alignItems={'center'}>
          <Icon as={<Ionicons name={'ios-moon'} />} color={'#405b67'} />
          <Text fontSize={'lg'} color={'#405b67'} fontWeight={'medium'}>
            Dark Mode
          </Text>
        </HStack>
      ) : (
        <HStack space={2} justifyContent={'center'} alignItems={'center'}>
          <Icon as={<Ionicons name={'ios-sunny'} />} color={'#405b67'} />
          <Text fontSize={'lg'} color={'#405b67'} fontWeight={'medium'}>
            Light Mode
          </Text>
        </HStack>
      )}
      <Switch onChange={() => setIsDarkMode(!isDarkMode)} />
    </HStack>
  );
};

export default ModeSettingItem;
