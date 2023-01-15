import {Text} from 'react-native';
import React from 'react';
import {FlatList, ScrollView} from 'native-base';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Character, RootStackParamList} from '../../../.types';
import {getAllCharacters} from '../../data/queries';
import SuperHero from '../../components/SuperHero';
const Feed = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {characters, error, isLoading} = getAllCharacters({});

  const renderItem = (item: Character) => (
    <SuperHero
      name={item.name}
      image={item.thumbnail.path + '.' + item.thumbnail.extension}
      description={item.description}
      id={item.id}
      isLoading={isLoading}
    />
  );

  return (
    <FlatList
      padding={2}
      data={characters}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Feed;
