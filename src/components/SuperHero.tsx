import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Box, Image, Skeleton} from 'native-base';

interface SuperHeroProps {
  name: string;
  image: string;
  description: string;
  id: number;
  isLoading?: boolean;
}

const SuperHero: FC<SuperHeroProps> = (props) => {
  const {name, image, description, id, isLoading} = props;
  return isLoading ? (
    <Box
      justifyContent={'center'}
      padding={1}
      borderRadius={'2xl'}
      backgroundColor={'gray.300'}
      marginY={1}>
      <Box flexDirection={'row'}>
        <Box alignSelf={'center'}>
          <Skeleton height={100} width={100} rounded={'full'} />
        </Box>
        <Box alignSelf={'center'} marginLeft={3}>
          <Skeleton height={5} width={200} rounded={'xl'} />
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      justifyContent={'center'}
      padding={1}
      borderRadius={'2xl'}
      backgroundColor={'gray.300'}
      marginY={1}>
      <Box flexDirection={'row'}>
        <Box alignSelf={'center'}>
          <Image
            source={{uri: image}}
            alt="hero"
            size={'lg'}
            resizeMode={'contain'}
            rounded={'2xl'}
          />
        </Box>
        <Box alignSelf={'center'} marginLeft={3}>
          <Text>{name}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SuperHero;

const styles = StyleSheet.create({});
