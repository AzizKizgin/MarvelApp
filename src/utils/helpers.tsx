import md5 from 'js-md5';
import {PRIVATE_API_KEY, PUBLIC_API_KEY, ts} from './consts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Character} from '../../.types';

export const getHash = () => {
  const hash = md5.create();
  hash.update(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);
  return hash.hex();
};

export const addToFavs = async (character: Character) => {
  const allSavedHero = await AsyncStorage.getAllKeys();
  if (!allSavedHero.includes(character.id.toString())) {
    await AsyncStorage.setItem(
      character.id.toString(),
      JSON.stringify(character),
    );
  }
};

export const deleteFromFavs = async (id: number) => {
  if (await AsyncStorage.getItem(id.toString())) {
    await AsyncStorage.removeItem(id.toString());
  }
};

export const isFav = async (id: number) => {
  const allSavedHero = await AsyncStorage.getAllKeys();
  return allSavedHero.includes(id.toString());
};

export const getAllFavs = async () => {
  const allSavedHero = await AsyncStorage.getAllKeys();
  const favs = await AsyncStorage.multiGet(allSavedHero);
  console.log(favs);
};
