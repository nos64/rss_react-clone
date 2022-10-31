import { ICharacter, IError, IItems } from 'components/APIComponent/APIComponent';
// import { IFormCard } from 'pages/FormPage/FormPage';
import { IAPIGlobalState, IAPIGlobalAction, IFormCard } from '../types/types';

const apiReducer = (state: IAPIGlobalState, action: IAPIGlobalAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'searchQuery':
      return { ...state, searchQuery: payload as string };
    case 'error':
      return { ...state, error: payload as Partial<IError> };
    case 'isLoaded':
      return { ...state, isLoaded: payload as boolean };
    case 'items':
      return { ...state, items: payload as ICharacter[] };
    case 'isModalActive':
      return { ...state, isModalActive: payload as boolean };
    case 'activeItem':
      return { ...state, activeItem: payload as ICharacter };
    case 'responseFromServer':
      return { ...state, responseFromServer: payload as IItems };
    case 'formCards':
      return { ...state, formCards: payload as IFormCard[] };
    case 'formCard':
      return { ...state, formCard: payload as IFormCard };
    // case 'createFormCard':
    //   return { ...state, }
    default:
      return state;
  }
};

export default apiReducer;
