import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'src/redux/types';

const initialState: AuthState = {
  user: { full_name: '', email: '', role: '' },
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: state => {
      state.token = '';
    },
  },
});
export const { setToken, clearToken, setEmail } = authSlice.actions;
export const authReducer = authSlice.reducer;
