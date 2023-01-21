import {Box, Image, Skeleton} from 'native-base';
import React, {FC} from 'react';
import {getComicById} from '../../../data/queries';

interface HeroComicProps {
  id: number;
}
const HeroComic: FC<HeroComicProps> = (props) => {
  const {id} = props;

  const {comic, isLoading, error, isSuccess} = getComicById(id);
  console.log(comic?.thumbnail.path + '.' + comic?.thumbnail.extension);
  return (
    <Box>
      {isLoading ? null : (
        <Image
          source={{
            uri: comic?.thumbnail.path + '.' + comic?.thumbnail.extension,
          }}
          alt="hero"
          height={200}
          width={200}
          rounded={'xl'}
          resizeMode={'contain'}
        />
      )}
    </Box>
  );
};

export default HeroComic;
