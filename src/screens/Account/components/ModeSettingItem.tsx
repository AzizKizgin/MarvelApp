import {HStack, Icon, Switch, Text, useColorMode} from 'native-base';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../../../Theme';
const ModeSettingItem = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack justifyContent={'space-between'} marginTop={4}>
      <HStack space={2} justifyContent={'center'} alignItems={'center'}>
        <Icon as={<Ionicons name={'ios-moon'} />} color={'mainDarkBlue'} />
        <Text fontSize={'lg'} color={'mainDarkBlue'} fontWeight={'medium'}>
          Dark Mode
        </Text>
      </HStack>
      <Switch
        onChange={() => toggleColorMode()}
        trackColor={{true: '#767577', false: theme.colors.mainLightBlue}}
        thumbColor={
          colorMode === 'dark' ? '#2f2932' : theme.colors.mainDarkBlue
        }
        isChecked={colorMode === 'dark'}
      />
    </HStack>
  );
};

export default ModeSettingItem;
