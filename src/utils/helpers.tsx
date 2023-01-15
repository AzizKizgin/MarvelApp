import md5 from 'js-md5';
import {PRIVATE_API_KEY, PUBLIC_API_KEY, ts} from './consts';

export const getHash = () => {
  const hash = md5.create();
  hash.update(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);
  return hash.hex();
};
