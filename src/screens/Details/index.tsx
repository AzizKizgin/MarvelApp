import React from 'react';
import {Box, Center, Skeleton, VStack} from 'native-base';
import {RouteProp, useRoute} from '@react-navigation/native';
import {getCharacterById, getCharacterComicsById} from '../../data/queries';
import {ScrollView} from 'react-native-gesture-handler';
import HeroComic from '../../components/HeroComic';
import HeroImage from './components/HeroImage';
import HeroDetail from './components/HeroDetail';
import HeroComics from './components/HeroComics';
import DetailSkeleton from './components/DetailSkeleton';
type RouteParams = RouteProp<{params: {id: number}}, 'params'>;

const Detail = () => {
  const route = useRoute<RouteParams>();
  const {id} = route.params;
  const {character, isLoading} = getCharacterById(id);
  const {comics, isLoading: isComicLoading} = getCharacterComicsById(id);
  const imageUrl =
    character?.thumbnail.path + '.' + character?.thumbnail.extension;

  return isComicLoading || isLoading ? (
    <DetailSkeleton />
  ) : (
    <Box flex={1} variant={'container'} justifyContent={'space-between'}>
      <Box>
        <HeroImage imageUrl={imageUrl} heroName={character?.name} />
        <HeroDetail character={character} />
      </Box>
      <Box marginBottom={6}>
        <HeroComics comics={comics} />
      </Box>
    </Box>
  );
};

export default Detail;
