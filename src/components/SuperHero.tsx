import React, {FC} from 'react';
import {Box, Image, Pressable, Skeleton, Text} from 'native-base';
import FavButton from './FavButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../.types';
interface SuperHeroProps {
  name: string;
  image: string;
  description: string;
  id: number;
  isLoading?: boolean;
}

const SuperHero: FC<SuperHeroProps> = (props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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
    <Pressable
      onPress={() => {
        navigation.navigate('Details', {
          id,
        });
      }}
      justifyContent={'center'}
      padding={1}
      borderRadius={'2xl'}
      backgroundColor={'gray.300'}
      marginY={1}>
      <Box flexDirection={'row'} justifyContent={'space-between'}>
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
          <Box alignSelf={'center'} marginLeft={3} width={'60%'} flexShrink={1}>
            <Text fontSize={'md'} color={'cyan.800'}>
              {name}
            </Text>
          </Box>
        </Box>
        <FavButton />
      </Box>
    </Pressable>
  );
};

export default SuperHero;
