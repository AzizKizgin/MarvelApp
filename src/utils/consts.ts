import md5 from 'js-md5';
export const API_URL = 'https://gateway.marvel.com:443/v1/public';
export const PUBLIC_API_KEY = 'dce7ce386c1ccb6fb71c45f66be1bf7c';
export const PRIVATE_API_KEY = 'b41aa3b1dcdecd122eb7cca2cea714be6d08ba2e';
export const ts = Math.round(+new Date() / 1000);
const hash = md5.create();
hash.update(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);
export const hashHex = hash.hex();
