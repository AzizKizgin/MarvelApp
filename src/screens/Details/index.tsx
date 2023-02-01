import React from 'react';
import {Box, Center, Image, Skeleton, Text, VStack} from 'native-base';
import {RouteProp, useRoute} from '@react-navigation/native';
import {getCharacterById, getCharacterComicsById} from '../../data/queries';
import {ScrollView} from 'react-native-gesture-handler';
import HeroComic from './components/HeroComic';
import FavButton from '../../components/FavButton';
type RouteParams = RouteProp<{params: {id: number}}, 'params'>;

const Detail = () => {
  const route = useRoute<RouteParams>();
  const {id} = route.params;
  const {character, isLoading} = getCharacterById(id);
  const {comics, isLoading: isComicLoading} = getCharacterComicsById(id);

  return isComicLoading || isLoading ? (
    <Box flex={1} variant={'container'}>
      <Center marginTop={6}>
        <Skeleton height={300} width={300} rounded={'full'} />
      </Center>
      <VStack space={4} marginX={4} marginTop={10}>
        <Skeleton height={10} width={'full'} rounded={'xl'} />
        <Skeleton height={20} width={'full'} rounded={'xl'} />
      </VStack>
    </Box>
  ) : (
    <Box flex={1} variant={'container'} justifyContent={'space-between'}>
      <Box>
        <Center marginTop={6}>
          <Image
            source={{
              uri:
                character?.thumbnail.path +
                '.' +
                character?.thumbnail.extension,
            }}
            alt="hero"
            height={250}
            width={250}
            rounded={'full'}
            resizeMode={'cover'}
          />
        </Center>
        <VStack space={4} marginX={4}>
          <Center flexDirection={'row'} marginTop={4}>
            <Text
              fontSize={'2xl'}
              fontWeight={'bold'}
              textAlign={'center'}
              color={'cyan.800'}>
              {character?.name}
            </Text>
            <Box marginLeft={4}>
              {character && <FavButton character={character} />}
            </Box>
          </Center>
          <Text
            fontSize={'md'}
            textAlign={'center'}
            color={'cyan.800'}
            marginTop={4}>
            {character?.description}
          </Text>
        </VStack>
      </Box>
      <Box marginBottom={6}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {comics?.map((comic) => (
            <Box
              key={comic.id}
              justifyContent={'center'}
              marginX={2}
              borderRadius={'2xl'}
              variant={'container'}
              marginY={1}>
              <HeroComic id={comic.id} />
            </Box>
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Detail;
