import {useQuery} from '@tanstack/react-query';
import {Character, CharacterParams, Comic, ComicParams} from '../../.types';
import {getCharacter, getCharacters, getComic, getComics} from '../utils/api';

export const getAllCharacters = (params: CharacterParams) => {
  const {data, isLoading, error, isFetching, isSuccess} = useQuery<{
    data: {
      results: Character[];
    };
  }>(['characters', params], () => getCharacters(params), {
    enabled: !!params,
  });
  return {
    characters: data?.data?.results,
    isLoading: isLoading && isFetching,
    error,
    isSuccess,
  };
};

export const getCharacterById = (id: number) => {
  const {data, isLoading, error, isFetching, isSuccess} = useQuery<{
    data: {
      results: Character;
    };
  }>(['character', id], () => getCharacter(id), {
    enabled: !!id,
  });
  return {
    character: data?.data.results,
    isLoading: isLoading && isFetching,
    error,
    isSuccess,
  };
};

export const getCharacterComics = (id: number) => {
  const {data, isLoading, error, isFetching, isSuccess} = useQuery<{
    data: {
      results: Comic;
    };
  }>(['characterComics', id], () => getCharacter(id), {
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
      results: Comic;
    };
  }>(['comic', id], () => getComic(id), {
    enabled: !!id,
  });
  return {
    comic: data?.data.results,
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
