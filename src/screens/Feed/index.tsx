import {ActivityIndicator} from 'react-native';
import React, {useRef, useState} from 'react';
import {Box, ChevronUpIcon, Fab, Input, SearchIcon} from 'native-base';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Character, RootStackParamList} from '../../../.types';
import {getAllCharacters} from '../../data/queries';
import SuperHero from '../../components/SuperHero';
import {FlatList} from 'react-native-gesture-handler';
const Feed = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isFabVisible, setIsFabVisible] = useState(false);
  const [searchText, setSearchText] = useState<string>('');
  const {characters, isLoading, fetchNextPage, refetch} = getAllCharacters({
    nameStartsWith: searchText !== '' ? searchText : undefined,
  });
  const flatListRef = useRef<FlatList>(null);
  const renderItem = (item: Character, index: number) => (
    <SuperHero
      name={item.name}
      image={item.thumbnail.path + '.' + item.thumbnail.extension}
      description={item.description}
      id={item.id}
      isLoading={isLoading}
      key={item.id.toString()}
    />
  );

  return (
    <Box flex={1}>
      <Box
        marginY={1}
        flexDirection={'row'}
        justifyContent={'space-between'}
        paddingX={3}
        alignItems={'center'}>
        <Box flex={1}>
          <Input
            backgroundColor={'gray.200'}
            placeholder={'Search...'}
            height={10}
            fontSize={'md'}
            InputRightElement={
              <SearchIcon size={'md'} marginRight={2} color={'gray.400'} />
            }
            onChangeText={(text) => setSearchText(text)}
          />
        </Box>
      </Box>
      <FlatList
        ref={flatListRef}
        style={{paddingHorizontal: 10, paddingBottom: 10, flex: 1}}
        data={characters}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <Box marginBottom={'2'}>
            <ActivityIndicator size={'large'} />
          </Box>
        }
        onRefresh={refetch}
        refreshing={isLoading}
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
        icon={<ChevronUpIcon />}
        display={isFabVisible ? 'flex' : 'none'}
        onPress={() => {
          console.log('first');
          flatListRef.current?.scrollToIndex({
            index: 0,
          });
        }}
      />
    </Box>
  );
};

export default Feed;
