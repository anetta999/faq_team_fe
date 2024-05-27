import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signIn } from './authOperations';

type User = {
  name: string;
  email: string;
  role: string;
};

type AuthPayload = {
  user: User;
  token: string;
};

type AuthState = {
  user: User;
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};

const initialState: AuthState = {
  user: { name: '', email: '', role: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<AuthPayload>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
    );
  },
});

export const authReducer = authSlice.reducer;
