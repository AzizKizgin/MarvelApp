import React, {FC, memo} from 'react';
import {Box, Image, Pressable, Skeleton, Text} from 'native-base';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Character, RootStackParamList} from '../../../.types';
import FavButton from '../FavButton';
import SuperHeroSkeleton from './SuperHeroSkeleton';
import SuperHeroImage from './SuperHeroImage';
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
    <SuperHeroSkeleton />
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
          <SuperHeroImage image={image} />
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
