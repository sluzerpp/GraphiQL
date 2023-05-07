// import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
// import { UseFormRegister, FieldErrors } from 'react-hook-form';

// export interface
// auth: Auth;

export interface defaultValues {
  name: '';
  picture: '';
  dateOfBirth: '';
  gender: '';
  agreeToTerms: false;
  favoriteColor: '';
}

export interface SearchProps {
  value: string;
  onSearchChange: (value: string) => void;
  handleClick: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
