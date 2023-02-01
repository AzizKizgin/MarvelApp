import md5 from 'js-md5';
import {PRIVATE_API_KEY, PUBLIC_API_KEY, ts} from './consts';
import {Linking} from 'react-native';

export const getHash = () => {
  const hash = md5.create();
  hash.update(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);
  return hash.hex();
};

export const ContactUs = () => {
  Linking.openURL('https://github.com/AzizKizgin');
};

export const defaultImage =
  'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg';
