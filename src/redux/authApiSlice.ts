import { GoogleUser, Response, UpdateUser, User } from 'src/redux/types';
import { apiSlice } from './apiSlice';
const AUTH_URL = 'Authorization';
const USER_URL = 'users';
const GOOGLE_URL = 'google';

const appApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<Response<string>, User>({
      query: data => ({
        url: `${AUTH_URL}/sign-in`,
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
    verifyOtp: builder.mutation<Response<{ is_verified: boolean }>, User>({
      query: data => ({
        url: `${USER_URL}/verify-otp`,
        method: 'POST',
        body: data,
      }),
    }),
    restorePass: builder.mutation<Response<void>, User>({
      query: data => ({
        url: `${USER_URL}/user/send-otp`,
        method: 'POST',
        body: data,
      }),
    }),
    newPass: builder.mutation<Response<void>, User>({
      query: data => ({
        url: `${USER_URL}/set-new-pass`,
        method: 'POST',
        body: data,
      }),
    }),
    getUser: builder.mutation<Response<User>, { token: string }>({
      query: data => ({
        url: `${USER_URL}/user`,
        method: 'POST',
        body: data,
      }),
    }),
    googleVerify: builder.mutation<GoogleUser, void>({
      query: () => ({
        url: `${GOOGLE_URL}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useUpdateMutation,
  useVerifyOtpMutation,
  useGoogleVerifyMutation,
  useGetUserMutation,
  useRestorePassMutation,
  useNewPassMutation,
} = appApiSlice;
