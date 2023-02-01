import {Box, Image, Text} from 'native-base';
import React from 'react';

const ProfileItem = () => {
  return (
    <Box height={'1/3'}>
      <Box
        alignSelf={'center'}
        position={'absolute'}
        top={-75}
        alignItems={'center'}>
        <Image
          source={require('../../../assets/default.jpg')}
          alt={'Profile Picture'}
          rounded={'full'}
          width={150}
          height={150}
          resizeMode={'cover'}
        />
        <Text
          fontSize={'2xl'}
          fontWeight={'bold'}
          color={'mainDarkBlue'}
          marginTop={4}>
          John Doe
        </Text>
        <Text
          fontSize={'md'}
          fontWeight={'bold'}
          color={'mainDarkBlue'}
          opacity={0.7}
          marginTop={1}>
          Iron Man
        </Text>
      </Box>
    </Box>
  );
};

export default ProfileItem;
