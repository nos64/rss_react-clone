import { Dispatch } from 'react';

export type FormFields = {
  firstName: HTMLInputElement;
  surname: HTMLInputElement;
  dateOfBirth: HTMLInputElement;
  gender: HTMLInputElement;
  email: HTMLInputElement;
  country: HTMLSelectElement;
  picture: HTMLInputElement;
  rule: HTMLInputElement;
};

export interface IFormError {
  firstName: string;
  surname: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  country: string;
  picture: string;
  rule: string;
}

export interface IFormCard {
  firstName: string;
  surname: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  country: string;
  picture: string;
  rule: boolean;
  keyID?: string;
}
export type statusSortType = 'alive' | 'dead' | 'unknown' | '';
export type genderSortType = 'female' | 'male' | 'genderless' | 'unknown' | '';

export interface IAPIGlobalState {
  searchQuery: string;
  error?: string;
  isLoaded: boolean;
  items: ICharacter[] | [];
  activeItem: ICharacter | null;
  responseFromServer: IItems | null;
  statusParam: string;
  genderParam: string;
  currentPage: number;
  sortByName: string;
  responseErr: boolean;
}

export interface IError {
  message: string;
  fileName: string;
  lineNumber: string;
}
export interface IItems {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | number;
  };
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
