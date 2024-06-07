import * as yup from 'yup';

export const confirmSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Email format is incorrect')
      .required('Please enter your credentials'),
    full_name: yup.string().required('Please enter your name'),
  })
  .required();
