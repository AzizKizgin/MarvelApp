import AsyncStorage from '@react-native-async-storage/async-storage';
import {Character} from '../../.types';

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
  let allFavs: Character[] = [];
  const allSavedHero = await AsyncStorage.getAllKeys();
  const favs = await AsyncStorage.multiGet(allSavedHero);
  favs.map((fav) => {
    fav[1] && allFavs.push(JSON.parse(fav[1]));
  });
  return allFavs;
};

export const setProfilePicture = async (uri: string, name: string) => {
  await AsyncStorage.setItem('profilePicture', uri);
  await AsyncStorage.setItem('profileName', name);
};

export const getProfilePicture = async () => {
  const uri = (await AsyncStorage.getItem('profilePicture')) || '';
  const name = (await AsyncStorage.getItem('profileName')) || '';
  return [uri, name];
};
