import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnimatedPressable from './AnimatedComponents/AnimatedPressable';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const FavButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const iconScale = useSharedValue(1);
  const iconRStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: iconScale.value}],
    };
  });

  useEffect(() => {
    if (isFavorite) {
      iconScale.value = withSpring(1.2);
    } else {
      iconScale.value = withSpring(1);
    }
  }, [isFavorite]);

  return (
    <AnimatedPressable
      alignSelf={'center'}
      style={iconRStyle}
      marginRight={4}
      onPress={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? (
        <Icon name="bookmark" size={25} color={'gray'} />
      ) : (
        <Icon name="bookmark-outline" size={25} color={'gray'} />
      )}
    </AnimatedPressable>
  );
};

export default FavButton;

const styles = StyleSheet.create({});
