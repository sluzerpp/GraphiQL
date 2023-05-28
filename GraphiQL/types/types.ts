// import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
// import { UseFormRegister, FieldErrors } from 'react-hook-form';
import React from 'react';
// export interface
// auth: Auth;
// добавить нормально типы данных сюда
//export interface
export interface UserValues {
  name: string;
  email: string;
  password: string;
  gender: '';
  agreeToTerms: false;
  favoriteColor: '';
}

export interface SearchProps {
  value: string;
  onSearchChange: (value: string) => void;
  handleClick: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
