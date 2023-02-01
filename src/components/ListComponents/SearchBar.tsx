import {Box, Icon, Input, SearchIcon} from 'native-base';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface SearchBarProps {
  setSearchText: (text: string) => void;
  searchText: string;
}
const SearchBar = ({setSearchText, searchText}: SearchBarProps) => {
  const onChangeText = (text: string) => {
    setSearchText(text);
  };
  return (
    <Box
      marginY={1}
      flexDirection={'row'}
      justifyContent={'space-between'}
      paddingX={3}
      alignItems={'center'}>
      <Box flex={1}>
        <Input
          variant={'searchBar'}
          placeholder={'Search...'}
          fontSize={'md'}
          value={searchText}
          InputRightElement={
            searchText !== '' ? (
              <Icon
                as={MaterialCommunityIcons}
                name={'close'}
                size={'lg'}
                marginRight={2}
                color={'gray.400'}
                onPress={() => {
                  setSearchText('');
                }}
              />
            ) : (
              <Icon
                as={MaterialCommunityIcons}
                name={'magnify'}
                size={'lg'}
                marginRight={2}
                color={'gray.400'}
              />
            )
          }
          onChangeText={onChangeText}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
