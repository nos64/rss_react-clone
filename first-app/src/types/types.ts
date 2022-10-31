import { ICharacter, IError, IItems } from 'components/APIComponent/APIComponent';
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
export type statusSortType = 'alive' | 'dead' | 'unknown';
export type genderSortType = 'female' | 'male' | 'genderless' | 'unknown';
export interface IAPIGlobalState {
  searchQuery: string;
  error: Partial<IError>;
  isLoaded: boolean;
  items: ICharacter[] | [];
  isModalActive: boolean;
  activeItem: ICharacter | null;
  responseFromServer: IItems | null;
  formCards: IFormCard[] | [];
  formCard: IFormCard | null;
  statusParam: statusSortType | null;
  genderParam: genderSortType | null;
  currentPage: number;
}

export interface IAPIGlobalAction {
  type: string;
  payload?:
    | null
    | boolean
    | ICharacter
    | ICharacter[]
    | IItems
    | IFormCard
    | IFormCard[]
    | IError
    | string
    | number;
}

export type ContextType = {
  state: IAPIGlobalState;
  dispatch: Dispatch<IAPIGlobalAction>;
};
