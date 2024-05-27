import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = '';

const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

type Credentials = {
  email: string;
  password: string;
};

export const signIn = createAsyncThunk(
  '',
  async (credentials: Credentials, thunkAPI) => {
    try {
      const res = await axios.post('', credentials);

      setToken(res.data.token);
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
