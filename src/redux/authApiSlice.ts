import { Response, UpdateUser, User } from 'src/redux/types';
import { apiSlice } from './apiSlice';
const AUTH_URL = 'Authorization';
const USER_URL = 'users';

const appApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<Response<string>, User>({
      query: data => ({
        url: `${AUTH_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    registration: builder.mutation<Response<void>, User>({
      query: data => ({
        url: `${AUTH_URL}/sign-up`,
        method: 'POST',
        body: data,
      }),
    }),
    update: builder.mutation<Response<void>, { id: string; data: UpdateUser }>({
      query: ({ id, data }) => ({
        url: `${USER_URL}/update/${id}`,
        method: 'PATH',
        body: data,
      }),
    }),
    getUser: builder.query<Response<User[]>, void>({
      query: () => ({
        url: `${USER_URL}`,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useUpdateMutation,
  useGetUserQuery,
} = appApiSlice;
