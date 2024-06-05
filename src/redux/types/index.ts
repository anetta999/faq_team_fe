export type Response<T> = {
  data: T;
  message: string;
};

export type User = {
  name: string;
  email: string;
  role?: string;
};

export type AuthState = {
  user: User;
  token: string;
};
export type UpdateUser = {
  user_name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  phone?: string;
  address?: string;
  address_2?: string;
  country?: string;
  city?: string;
  cloth_size?: string;
  jeans_size?: string;
  shoes_size?: number;
};
