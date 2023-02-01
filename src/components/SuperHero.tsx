import React, {FC, memo} from 'react';
import {Box, Image, Pressable, Skeleton, Text} from 'native-base';
import FavButton from './FavButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Character, RootStackParamList} from '../../.types';
interface SuperHeroProps {
  character: Character;
  isLoading?: boolean;
}

const SuperHero: FC<SuperHeroProps> = memo((props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {isLoading, character} = props;
  const id = character.id;
  const image = character.thumbnail.path + '.' + character.thumbnail.extension;
  return isLoading ? (
    <Box
      justifyContent={'center'}
      padding={1}
      borderRadius={'2xl'}
      variant={'superHeroContainer'}
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
      marginY={1}>
      <Box
        flexDirection={'row'}
        justifyContent={'space-between'}
        variant={'superHeroContainer'}>
        <Box flexDirection={'row'}>
          <Box alignSelf={'center'}>
            <Image
              source={{uri: image}}
              alt="hero"
              size={'lg'}
              resizeMode={'cover'}
              rounded={'2xl'}
            />
          </Box>
          <Box alignSelf={'center'} marginLeft={3} width={'60%'} flexShrink={1}>
            <Text fontSize={'md'} color={'cyan.800'}>
              {character.name}
            </Text>
          </Box>
        </Box>
        <FavButton character={character} />
      </Box>
    </Pressable>
  );
});

export default SuperHero;
