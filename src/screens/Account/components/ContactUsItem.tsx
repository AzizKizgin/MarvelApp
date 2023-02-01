import {HStack, Icon, Pressable, Text} from 'native-base';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ContactUs} from '../../../utils/helpers';

const ContactUsItem = () => {
  return (
    <Pressable onPress={() => ContactUs()}>
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <HStack space={2} alignItems={'center'}>
          <Icon
            as={<MaterialIcons name={'contact-support'} />}
            color={'#405b67'}
          />
          <Text fontSize={'lg'} color={'#405b67'} fontWeight={'medium'}>
            Contact Us
          </Text>
        </HStack>
        <Icon
          as={<MaterialIcons name={'keyboard-arrow-right'} />}
          color={'#405b67'}
          size={6}
          marginRight={2}
        />
      </HStack>
    </Pressable>
  );
};

export default ContactUsItem;
