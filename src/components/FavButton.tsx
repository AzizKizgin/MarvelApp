import React, {FC, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnimatedPressable from './AnimatedComponents/AnimatedPressable';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Character} from '../../.types';
import {useNavigation} from '@react-navigation/native';
import {addToFavs, deleteFromFavs, isFav} from '../data/storage';
interface FavButtonProps {
  character: Character;
}
const FavButton: FC<FavButtonProps> = ({character}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const iconScale = useSharedValue(1);
  const navigation = useNavigation();
  const iconRStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: iconScale.value}],
    };
  });

  const addHeroToFavs = async (character: Character) => {
    setIsFavorite(true);
    iconScale.value = withSpring(1.2);
    await addToFavs(character);
  };

  const deleteHeroFromFavs = async (id: number) => {
    setIsFavorite(false);
    iconScale.value = withSpring(1);
    await deleteFromFavs(id);
  };

  useEffect(() => {
    isFav(character.id).then((res) => {
      setIsFavorite(res);
      if (res) {
        iconScale.value = withSpring(1.2);
      } else {
        iconScale.value = withSpring(1);
      }
    });
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      isFav(character.id).then((res) => {
        setIsFavorite(res);
        if (res) {
          iconScale.value = withSpring(1.2);
        } else {
          iconScale.value = withSpring(1);
        }
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <AnimatedPressable alignSelf={'center'} style={iconRStyle} marginRight={4}>
      {isFavorite ? (
        <Icon
          name="bookmark"
          size={25}
          color={'gray'}
          onPress={() => deleteHeroFromFavs(character.id)}
        />
      ) : (
        <Icon
          name="bookmark-outline"
          size={25}
          color={'gray'}
          onPress={() => addHeroToFavs(character)}
        />
      )}
    </AnimatedPressable>
  );
};

export default FavButton;
