export const API_KEY = "62fea60dc54c8eb8a05a6569064d5bd9";
const BASE_URL = "https://gateway.marvel.com";
const hash = "8e58f516c9a4c389c33c7c831c449740";
export const CHARACTERS_API =
  BASE_URL + "/v1/public/characters" + `?ts=1&apikey=${API_KEY}&hash=${hash}`;
export const COMICS_API =
  BASE_URL + "/v1/public/comics" + `?ts=1&apikey=${API_KEY}&hash=${hash}`;
