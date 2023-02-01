import React from 'react';
import {Box, Skeleton} from 'native-base';

const SuperHeroSkeleton = () => {
  return (
    <Box
      justifyContent={'center'}
      padding={1}
      borderRadius={'2xl'}
      variant={'superHeroContainer'}
      marginY={1}>
      <Box flexDirection={'row'}>
        <Box alignSelf={'center'}>
          <Skeleton height={100} width={100} rounded={'full'} />
        </Box>
        <Box alignSelf={'center'} marginLeft={3}>
          <Skeleton height={5} width={200} rounded={'xl'} />
        </Box>
      </Box>
    </Box>
  );
};

export default SuperHeroSkeleton;
