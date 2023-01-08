export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
export type CharactersOrderBy = 'name' | 'modified' | '-name' | '-modified';
export type CharacterParams = {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: string;
  comics?: string;
  series?: string;
  events?: string;
  stories?: string;
  orderBy?: CharactersOrderBy;
  limit?: number;
  offset?: number;
};

export type ComicsOrderBy =
  | 'focDate'
  | 'onsaleDate'
  | 'title'
  | 'issueNumber'
  | '-focDate'
  | '-onsaleDate'
  | '-title'
  | '-issueNumber'
  | 'modified'
  | '-modified';

export type ComicParams = {
  title?: string;
  titleStartsWith?: string;
  startYear?: number;
  characterId?: number[];
  seriesId?: number[];
  orderBy?: ComicsOrderBy;
  limit?: number;
  offset?: number;
};
