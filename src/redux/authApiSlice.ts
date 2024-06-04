import { Response, User } from 'src/redux/types';
import { apiSlice } from './apiSlice';
const USERS_URL = '/api/user';
const CARDS_URL = '/api/cards';
const RESTORE_PASS_URL = '/api/cards';
const NEW_PASS_URL = '/api/cards';

const appApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<Response<string>, User>({
      query: data => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    registration: builder.mutation<Response<void>, User>({
      query: data => ({
        url: `${USERS_URL}/register`,
        method: 'POST',
        body: data,
      }),
    }),
    restorePass: builder.mutation<Response<void>, User>({
      query: data => ({
        url: `${RESTORE_PASS_URL}/restorePass`,
        method: 'POST',
        body: data,
      }),
    }),
    newPass: builder.mutation<Response<void>, User>({
      query: data => ({
        url: `${NEW_PASS_URL}/newPass`,
        method: 'POST',
        body: data,
      }),
    }),
    getUser: builder.query<Response<User[]>, void>({
      query: () => ({
        url: `${CARDS_URL}`,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation, useGetUserQuery } =
  appApiSlice;
