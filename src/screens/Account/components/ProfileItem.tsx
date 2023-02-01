import {useNavigation} from '@react-navigation/native';
import {Box, Image, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {getProfilePicture} from '../../../data/storage';
import {defaultImage} from '../../../utils/helpers';

const ProfileItem = () => {
  const navigation = useNavigation();
  const [profilePicture, setProfilePicture] = useState<(string | null)[]>([
    defaultImage,
    '',
  ]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProfilePicture().then((res) => {
        if (res !== null) {
          setProfilePicture(res);
        }
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Box height={'1/3'}>
      <Box
        alignSelf={'center'}
        position={'absolute'}
        top={-75}
        alignItems={'center'}>
        <Image
          source={{
            uri: profilePicture[0] || defaultImage,
          }}
          alt={'Profile Picture'}
          rounded={'full'}
          width={175}
          height={175}
          resizeMode={'cover'}
        />
        <Text
          fontSize={'xl'}
          fontWeight={'bold'}
          color={'mainDarkBlue'}
          opacity={0.7}
          marginTop={2}>
          {profilePicture[1] || `Click on a hero's image to add name`}
        </Text>
      </Box>
    </Box>
  );
};

export default ProfileItem;
