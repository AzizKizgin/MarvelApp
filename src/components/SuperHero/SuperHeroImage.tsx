import React, {FC} from 'react';
import {Box, Image} from 'native-base';

interface Props {
  image: string;
}
const SuperHeroImage: FC<Props> = ({image}) => {
  return (
    <Box alignSelf={'center'}>
      <Image
        source={{uri: image}}
        alt="hero"
        size={'lg'}
        resizeMode={'cover'}
        rounded={'2xl'}
      />
    </Box>
  );
};

export default SuperHeroImage;
