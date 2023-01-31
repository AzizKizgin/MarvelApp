import {ActivityIndicator} from 'react-native';
import React, {memo, useRef, useState} from 'react';
import {Box, ChevronUpIcon, Fab, Text} from 'native-base';
import {Character} from '../../../.types';
import {getAllCharacters} from '../../data/queries';
import SuperHero from '../../components/SuperHero';
import {FlatList, RefreshControl} from 'react-native-gesture-handler';
import SearchBar from '../../components/ListComponents/SearchBar';
import {useIsFocused} from '@react-navigation/native';
const Feed = () => {
  const [isFabVisible, setIsFabVisible] = useState(false);
  const [searchText, setSearchText] = useState<string>('');
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const {characters, isLoading, fetchNextPage, refetch, isFetchingNextPage} =
    getAllCharacters({
      nameStartsWith: searchText !== '' ? searchText : undefined,
    });
  const flatListRef = useRef<FlatList>(null);

  const renderItem = (item: Character) => (
    <SuperHero
      character={item}
      isLoading={isLoading}
      key={item.id.toString()}
    />
  );

  return (
    <Box flex={1}>
      <SearchBar setSearchText={setSearchText} searchText={searchText} />
      <FlatList
        ref={flatListRef}
        style={{paddingHorizontal: 10, paddingBottom: 10, flex: 1}}
        data={characters}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <Box marginBottom={'2'}>
            {isLoading ||
              (isFetchingNextPage && <ActivityIndicator size={'large'} />)}
          </Box>
        }
        onRefresh={refetch}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await refetch();
              setRefreshing(false);
            }}
          />
        }
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
        bottom={75}
        icon={<ChevronUpIcon />}
        display={isFabVisible && isFocused ? 'flex' : 'none'}
        bgColor={'#86a6c5'}
        onPress={() => {
          flatListRef.current?.scrollToIndex({
            index: 0,
          });
        }}
      />
    </Box>
  );
};

export default Feed;
