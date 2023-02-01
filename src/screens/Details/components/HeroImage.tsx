import React, {FC} from 'react';
import {Center, Image} from 'native-base';

interface Props {
  imageUrl: string;
}
const HeroImage: FC<Props> = ({imageUrl}) => {
  return (
    <Center marginTop={6}>
      <Image
        source={{
          uri: imageUrl,
        }}
        alt="hero"
        height={250}
        width={250}
        rounded={'full'}
        resizeMode={'cover'}
      />
    </Center>
  );
};

export default HeroImage;
