import axios from 'axios';
import {CharacterParams, ComicParams} from '../../.types';
import urls from '../config/urls';
import {hashHex, PUBLIC_API_KEY, ts} from '../utils/consts';

const makeRequest = async (url: string, params?: any) => {
  let response;
  response = await axios({
    method: 'get',
    url: url,
    params: {
      ts: ts,
      apikey: PUBLIC_API_KEY,
      hash: hashHex,
      ...params,
    },
  });
  return response;
};

export const getCharacters = async (params?: CharacterParams) => {
  return await makeRequest(urls.getCharacters, params).then(
    (response) => response.data,
  );
};

export const getCharacter = async (id: number) => {
  return await makeRequest(urls.getCharacters + '/' + id).then(
    (response) => response.data,
  );
};

export const getCharacterComics = async (id: number, params?: ComicParams) => {
  return await makeRequest(
    urls.getCharacters + '/' + id + '/comics',
    params,
  ).then((response) => response.data);
};

export const getComics = async (params?: ComicParams) => {
  return await makeRequest(urls.getComics, params).then(
    (response) => response.data,
  );
};

export const getComic = async (id: number) => {
  return await makeRequest(urls.getComics + '/' + id).then(
    (response) => response.data,
  );
};

export const getComicCharacters = async (
  id: number,
  params?: CharacterParams,
) => {
  return await makeRequest(
    urls.getComics + '/' + id + '/characters',
    params,
  ).then((response) => response.data);
};
