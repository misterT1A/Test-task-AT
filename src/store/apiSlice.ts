import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IUser } from '../types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], null>({
      query: () => `/users?_limit=6`,
    }),
    getUser: builder.query<IUser, string>({
      query: (userID) => `/users/${userID}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = apiSlice;
