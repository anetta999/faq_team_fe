export type Response<T> = {
  data: T;
  message: string;
};

export type User = {
  name?: string;
  email?: string;
  role?: string;
  otp_code?: string;
  id?: string;
};

export type AuthState = {
  user: User;
  token: string;
};
