import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Box, ChevronUpIcon, Fab, Text} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {Character} from '../../../.types';
import SearchBar from '../../components/ListComponents/SearchBar';
import SuperHero from '../../components/SuperHero';
import {getAllFavs} from '../../utils/helpers';

const Favourites = () => {
  const [allFavs, setAllFavs] = useState<Character[]>([]);
  const [isFabVisible, setIsFabVisible] = useState(false);
  const [searchText, setSearchText] = useState<string>('');
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const flatListRef = useRef<FlatList>(null);
  const renderItem = (item: Character) => (
    <SuperHero character={item} isLoading={false} key={item.id.toString()} />
  );

  useEffect(() => {
    if (searchText === '') {
      getAllFavs().then((res) => {
        setAllFavs(res);
      });
    } else {
      getAllFavs().then((res) => {
        const filtered = res.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase()),
        );
        setAllFavs(filtered);
      });
    }
  }, [searchText]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAllFavs().then((res) => {
        setAllFavs(res);
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Box flex={1} variant={'container'}>
      <SearchBar setSearchText={setSearchText} searchText={searchText} />
      <FlatList
        ref={flatListRef}
        style={{paddingHorizontal: 10, paddingBottom: 10, flex: 1}}
        data={allFavs}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => item.id.toString()}
        onScroll={(event) => {
          if (event.nativeEvent.contentOffset.y > 500) {
            setIsFabVisible(true);
          } else {
            setIsFabVisible(false);
          }
        }}
      />

      <Fab
        key={'fab'}
        position={'absolute'}
        bottom={75}
        icon={<ChevronUpIcon />}
        display={isFabVisible && isFocused ? 'flex' : 'none'}
        onPress={() => {
          flatListRef.current?.scrollToIndex({
            index: 0,
          });
        }}
      />
    </Box>
  );
};

export default Favourites;
