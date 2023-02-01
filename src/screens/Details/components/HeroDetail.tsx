import React, {FC} from 'react';
import {Box, Center, Text, VStack} from 'native-base';
import {Character} from '../../../../.types';
import FavButton from '../../../components/FavButton';

interface Props {
  character?: Character;
}
const HeroDetail: FC<Props> = ({character}) => {
  return (
    <VStack space={4} marginX={4}>
      <Center flexDirection={'row'} marginTop={4}>
        <Text
          fontSize={'2xl'}
          fontWeight={'bold'}
          textAlign={'center'}
          color={'cyan.800'}>
          {character?.name}
        </Text>
        <Box marginLeft={4}>
          {character && <FavButton character={character} />}
        </Box>
      </Center>
      <Text
        fontSize={'md'}
        textAlign={'center'}
        color={'cyan.800'}
        marginTop={4}>
        {character?.description}
      </Text>
    </VStack>
  );
};

export default HeroDetail;
