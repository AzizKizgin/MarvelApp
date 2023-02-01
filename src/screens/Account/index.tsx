import {Box, VStack} from 'native-base';
import React from 'react';
import ContactUsItem from './components/ContactUsItem';
import ModeSettingItem from './components/ModeSettingItem';
import ProfileItem from './components/ProfileItem';

const Account = () => {
  return (
    <VStack
      flex={1}
      backgroundColor={'mainDarkBlue'}
      justifyContent={'flex-end'}>
      <Box variant={'container'} height={'4/5'} borderTopRadius={40}>
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
