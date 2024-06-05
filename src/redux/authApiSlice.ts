import { Response, User } from 'src/redux/types';
import { apiSlice } from './apiSlice';
const USERS_URL = 'http://localhost:3000/Authorization';
const CARDS_URL = '/api/cards';

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
        url: `${USERS_URL}/sign-up`,
        method: 'POST',
        body: data,
      }),
    }),
    verifyOtp: builder.mutation<Response<{ is_verified: boolean }>, User>({
      query: data => ({
        url: `${USERS_URL}/verify-otp`,
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

export const {
  useLoginMutation,
  useRegistrationMutation,
  useGetUserQuery,
  useVerifyOtpMutation,
} = appApiSlice;
