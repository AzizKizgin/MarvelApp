import {Box, Image} from 'native-base';
import React, {FC} from 'react';
import {getComicById} from '../data/queries';

interface HeroComicProps {
  id: number;
}
const HeroComic: FC<HeroComicProps> = (props) => {
  const {id} = props;

  const {comic, isLoading} = getComicById(id);
  return (
    <Box>
      {isLoading ? null : (
        <Image
          source={{
            uri: comic?.thumbnail.path + '.' + comic?.thumbnail.extension,
          }}
          alt="hero"
          height={150}
          width={150}
          rounded={'xl'}
          resizeMode={'cover'}
        />
      )}
    </Box>
  );
};

export default HeroComic;
