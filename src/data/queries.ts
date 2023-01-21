import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {Character, CharacterParams, Comic, ComicParams} from '../../.types';
import {
  getCharacter,
  getCharacterComics,
  getCharacters,
  getComic,
  getComics,
} from '../utils/api';

export const getAllCharacters = (params: CharacterParams) => {
  const {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    data,
    isLoading,
    isFetching,
    refetch,
  } = useInfiniteQuery(
    ['characters', params],
    ({pageParam = 0}) => getCharacters({...params, offset: pageParam}),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.total > lastPage.data.offset + lastPage.data.count) {
          return lastPage.data.offset + lastPage.data.count;
        }
        return undefined;
      },
      getPreviousPageParam: (firstPage) => {
        if (firstPage.data.offset > 0) {
          return firstPage.data.offset - firstPage.data.count;
        }
        return undefined;
      },
    },
  );
  return {
    characters: data?.pages.map((page) => page.data.results).flat(),
    isLoading: isLoading && isFetching,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    refetch,
    isFetching,
  };
};

export const getCharacterById = (id: number) => {
  const {data, isLoading, error, isFetching, isSuccess} = useQuery<{
    data: {
      results: Character[];
    };
  }>(['character', id], () => getCharacter(id), {
    enabled: !!id,
  });
  return {
    character: data?.data.results[0],
    isLoading: isLoading && isFetching,
    error,
    isSuccess,
  };
};

export const getCharacterComicsById = (id: number) => {
  const {data, isLoading, error, isFetching, isSuccess} = useQuery<{
    data: {
      results: Comic[];
    };
  }>(['characterComics', id], () => getCharacterComics(id), {
    enabled: !!id,
  });

  return {
    comics: data?.data.results,
    isLoading: isLoading && isFetching,
    error,
    isSuccess,
  };
};

export const getAllComics = (params: ComicParams) => {
  const {data, isLoading, error, isFetching, isSuccess} = useQuery<{
    data: {
      results: Comic[];
    };
  }>(['comics', params], () => getComics(params), {
    enabled: !!params,
  });
  return {
    comics: data?.data?.results,
    isLoading: isLoading && isFetching,
    error,
    isSuccess,
  };
};

export const getComicById = (id: number) => {
  const {data, isLoading, error, isFetching, isSuccess} = useQuery<{
    data: {
      results: Comic[];
    };
  }>(['comic', id], () => getComic(id), {
    enabled: !!id,
  });
  return {
    comic: data?.data.results[0],
    isLoading: isLoading && isFetching,
    error,
    isSuccess,
  };
};

export const getComicCharacters = (id: number) => {
  const {data, isLoading, error, isFetching, isSuccess} = useQuery<{
    data: {
      results: Character;
    };
  }>(['comicCharacters', id], () => getComic(id), {
    enabled: !!id,
  });
  return {
    characters: data?.data.results,
    isLoading: isLoading && isFetching,
    error,
    isSuccess,
  };
};
