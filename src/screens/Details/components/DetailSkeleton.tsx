import {Box, Center, Skeleton, VStack} from 'native-base';
import React from 'react';

const DetailSkeleton = () => {
  return (
    <Box flex={1} variant={'container'}>
      <Center marginTop={6}>
        <Skeleton height={300} width={300} rounded={'full'} />
      </Center>
      <VStack space={4} marginX={4} marginTop={10}>
        <Skeleton height={10} width={'full'} rounded={'xl'} />
        <Skeleton height={20} width={'full'} rounded={'xl'} />
      </VStack>
    </Box>
  );
};

export default DetailSkeleton;
