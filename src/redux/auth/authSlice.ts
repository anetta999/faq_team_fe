import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'src/redux/types';

const initialState: AuthState = {
  user: { name: '', email: '', role: '' },
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: state => {
      state.token = '';
    },
  },
});
export const { setToken, clearToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
