import React, {FC, useState} from 'react';
import {Button, Center, Image, Pressable} from 'native-base';
import {setProfilePicture} from '../../../data/storage';

interface Props {
  imageUrl: string;
  heroName?: string;
}
const HeroImage: FC<Props> = ({imageUrl, heroName = ''}) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  const saveProfilePicture = () => {
    setProfilePicture(imageUrl, heroName);
    setIsPressed(false);
  };
  return (
    <Pressable onPress={handlePress}>
      <Center marginTop={6}>
        <Image
          source={{
            uri: imageUrl,
          }}
          alt="hero"
          height={250}
          width={250}
          rounded={'full'}
          resizeMode={'stretch'}
          opacity={isPressed ? 0.5 : 1}
        />
        <Button
          alignSelf={'center'}
          colorScheme="muted"
          borderRadius={20}
          onPress={() => saveProfilePicture()}
          display={isPressed ? 'flex' : 'none'}
          position={'absolute'}>
          Add to Favs
        </Button>
      </Center>
    </Pressable>
  );
};

export default HeroImage;
