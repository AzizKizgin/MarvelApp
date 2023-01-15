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

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      type: string;
    }[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  urls: {
    type: string;
    url: string;
  }[];
};

export type Comic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: {
    type: string;
    language: string;
    text: string;
  }[];
  resourceURI: string;
  urls: {
    type: string;
    url: string;
  }[];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: {
    resourceURI: string;
    name: string;
  }[];
  collections: {
    resourceURI: string;
    name: string;
  }[];
  collectedIssues: {
    resourceURI: string;
    name: string;
  }[];
  dates: {
    type: string;
    date: string;
  }[];
  prices: {
    type: string;
    price: number;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: {
    path: string;
    extension: string;
  }[];
  creators: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      role: string;
    }[];
    returned: number;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      role: string;
    }[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      type: string;
    }[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
};
