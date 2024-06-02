import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Inputs } from './types';
import { StyledForm, SubmitBtn, ErrorMsg } from '../signInForm/styles';
import { useState } from 'react';
import EyeIcon from 'src/assets/icons/iconEye';
import EyeCloseIcon from 'src/assets/icons/iconEyeClose';
import { useRegistrationMutation } from 'src/redux/authApiSlice';

const signUpSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup
      .string()
      .email('Email format is incorrect')
      .required('Please enter your credentials'),
    password: yup
      .string()
      .min(8, 'Password format is incorrect')
      .required('Please enter your credentials'),
    repeatedPassword: yup
      .string()
      .test(
        'isRepeatedPasswordValueMatched',
        'Passwords entered in the "Password" and "Repeat password" fields must match',
        (value, { parent }) => !value || value === parent.password,
      )
      .min(8, 'Password format is incorrect')
      .required('Please enter your credentials'),
  })
  .required();

export const SignUpForm = () => {
  const [registration, { isLoading, isError }] = useRegistrationMutation();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      repeatedPassword: '',
    },
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    registration(data);
  };

  const [isPasswordShown, setPasswordShown] = useState<boolean>(false);

  const handlePassword = () => {
    setPasswordShown(!isPasswordShown);
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user-name">{t('signUp.name')}</label>
          <input
            type="text"
            {...register('name')}
            className={errors.name ? 'error-input' : ''}
            placeholder={t('signUp.namePlaceholder')}
            id="user-name"
          />
          {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="user-email">{t('signUp.email')}</label>
          <input
            type="text"
            {...register('email')}
            className={errors.email ? 'error-input' : ''}
            placeholder={t('signUp.emailPlaceholder')}
            id="user-email"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="user-password">{t('signUp.password')}</label>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            {...register('password')}
            className={errors.password ? 'error-input' : ''}
            placeholder={t('signUp.passwordsPlaceholder')}
            id="user-password"
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          <button type="button" onClick={handlePassword}>
            {isPasswordShown ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        <div>
          <label htmlFor="repeated-password">
            {t('signUp.repeatPassword')}
          </label>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            {...register('repeatedPassword')}
            className={errors.password ? 'error-input' : ''}
            placeholder={t('signUp.passwordsPlaceholder')}
            id="repeated-password"
          />
          {errors.repeatedPassword && (
            <ErrorMsg>{errors.repeatedPassword.message}</ErrorMsg>
          )}
          <button type="button" onClick={handlePassword}>
            {isPasswordShown ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        {isError && <ErrorMsg>{t('validation.server')}</ErrorMsg>}
        <SubmitBtn
          type="submit"
          variant="black"
          disabled={!isDirty || isSubmitting}
        >
          {isLoading ? t('loading.text') : t('signUp.submitBtn')}
        </SubmitBtn>
      </StyledForm>
    </>
  );
};
