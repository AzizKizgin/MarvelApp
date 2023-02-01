import React, {FC} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Box} from 'native-base';
import HeroComic from '../../../components/HeroComic';
import {Comic} from '../../../../.types';

interface Props {
  comics?: Comic[];
}
const HeroComics: FC<Props> = ({comics}) => {
  return (
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
  );
};

export default HeroComics;
