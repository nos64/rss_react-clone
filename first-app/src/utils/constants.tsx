//https://rickandmortyapi.com/api/character/?page=1&gender=female&status=&name=
export const BASE_PATH = 'https://rickandmortyapi.com/api/';
export const CHARACTERS = `character/`;
export const LOCATIONS = `/location`;
export const EPISODES = `/episode`;
export const SEARCH_PATH = '&name=';
export const PAGE = '?page=';
export const FILTER_BY_STATUS = '&status=';
export const FILTER_BY_GENDER = '&gender=';

export const formLineDescriptions = {
  firstName: 'First Name:',
  surname: 'Surname:',
  dateOfBirth: 'Date of birth:',
  genderMale: 'Male',
  genderFemale: 'Female',
  email: 'E-mail:',
  country: 'Country:',
  avatar: 'Avatar:',
  rule: 'I consent to my personal data',
};

export const errorMessagesText = {
  firstName: 'Please enter your correct first name',
  surname: 'Please enter your correct surname name',
  dateOfBirth: 'Please select your correct date of birth',
  gender: 'Please select your gender',
  email: 'Please enter correct E-mail',
  country: 'Please select your country',
  picture: 'Please input you avatar',
  rule: 'Please select this',
};

export const cardDescription = {
  status: 'Status: ',
  species: 'Species: ',
  gender: 'Gender: ',
  origin: 'Origin: ',
  location: 'Location: ',
};

export enum sortByNameEnum {
  // 'nameAZ' = nameAZ,
  nameAZ = 'nameAZ',
  nameZA = 'nameZA',
}
