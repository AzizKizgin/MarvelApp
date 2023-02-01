import {Box, HStack, Icon, Image, Switch, Text, VStack} from 'native-base';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ContactUsItem from './components/ContactUsItem';
import ModeSettingItem from './components/ModeSettingItem';
import ProfileItem from './components/ProfileItem';

const Account = () => {
  return (
    <VStack flex={1} backgroundColor={'#405b67'} justifyContent={'flex-end'}>
      <Box backgroundColor={'gray.200'} height={'4/5'} borderTopRadius={40}>
        <ProfileItem />
        <VStack paddingX={6} space={8}>
          <ModeSettingItem />
          <ContactUsItem />
        </VStack>
      </Box>
    </VStack>
  );
};

export default Account;
