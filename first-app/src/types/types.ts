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

export interface IAPIGlobalState {
  searchQuery: string;
  error: Partial<IError>;
  isLoaded: boolean;
  items: ICharacter[] | null;
  isModalActive: boolean;
  activeItem: ICharacter | null;
  responseFromServer: IItems | null;
}

export interface IAPIGlobalAction {
  type: string;
  payload?: null | boolean | ICharacter | ICharacter[] | IItems | IError | string;
}

export type ContextType = {
  state: IAPIGlobalState;
  dispatch: Dispatch<IAPIGlobalAction>;
};
