import { Response, UpdateUser, User } from 'src/redux/types';
import { apiSlice } from './apiSlice';
const AUTH_URL = 'Authorization';
const USER_URL = 'users';
const USERS_URL = 'http://localhost:3000/Authorization';
const CARDS_URL = '/api/cards';
const RESTORE_PASS_URL = '/api/cards';
const NEW_PASS_URL = '/api/cards';

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
    verifyOtp: builder.mutation<Response<{ is_verified: boolean }>, User>({
      query: data => ({
        url: `${USERS_URL}/verify-otp`,
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
  useGetUserQuery,
  useVerifyOtpMutation,
} = appApiSlice;
