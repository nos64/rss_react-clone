// import {
//   IAPIGlobalState,
//   IAPIGlobalAction,
//   statusSortType,
//   genderSortType,
//   IError,
//   ICharacter,
//   IItems,
// } from '../types/types';
// import { initialState } from './GlobalContext';

// const apiReducer = (state: IAPIGlobalState, action: IAPIGlobalAction) => {
//   const { type, payload } = action;
//   switch (type) {
//     case 'searchQuery':
//       return { ...state, searchQuery: payload as string };
//     case 'error':
//       return { ...state, error: payload as Partial<IError> };
//     case 'isLoaded':
//       return { ...state, isLoaded: payload as boolean };
//     case 'items':
//       return { ...state, items: payload as ICharacter[] };
//     case 'activeItem':
//       return { ...state, activeItem: payload as ICharacter };
//     case 'responseFromServer':
//       return { ...state, responseFromServer: payload as IItems };
//     case 'statusParam':
//       return { ...state, statusParam: payload as statusSortType };
//     case 'genderParam':
//       return { ...state, genderParam: payload as genderSortType };
//     case 'currentPage':
//       return { ...state, currentPage: payload as number };
//     case 'sortByName':
//       return { ...state, sortByName: payload as string };
//     case 'responseErr':
//       return { ...state, responseErr: payload as boolean };
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// };

// export default apiReducer;
