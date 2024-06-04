import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Inputs } from './types';
import { StyledForm, PasswordLink, SubmitBtn, ErrorMsg } from './styles';
import { useState } from 'react';
import EyeIcon from 'src/assets/icons/iconEye';
import EyeCloseIcon from 'src/assets/icons/iconEyeClose';
import { useLoginMutation } from 'src/redux/authApiSlice';
import { useSignInHook } from 'components/signInForm/hooks/signInHook.ts';

// const signInSchema = yup
//   .object()
//   .shape({
//     email: yup
//       .string()
//       .email('Email format is incorrect')
//       .required('Please enter your credentials'),
//     password: yup
//       .string()
//       .min(8, 'Password format is incorrect')
//       .required('Please enter your credentials'),
//   })
//   .required();

export const SignInForm = () => {
  const [login, { isLoading, isError }] = useLoginMutation();
  const { t } = useTranslation();
  const singInSchema = useSignInHook();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(singInSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    login(data);
  };

  const [isPasswordShown, setPasswordShown] = useState<boolean>(false);

  const handlePassword = () => {
    setPasswordShown(!isPasswordShown);
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user-email">{t('signIn.email')}</label>
          <input
            type="text"
            {...register('email')}
            className={errors.email ? 'error-input' : ''}
            placeholder={t('signIn.emailPlaceholder')}
            id="user-email"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="user-password">{t('signIn.password')}</label>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            {...register('password')}
            className={errors.password ? 'error-input' : ''}
            placeholder={t('signIn.passwordPlaceholder')}
            id="user-password"
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          <button type="button" onClick={handlePassword}>
            {isPasswordShown ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        <PasswordLink to="/restore-password">
          {t('signIn.forgotPassLink')}
        </PasswordLink>
        {isError && <ErrorMsg>{t('validation.server')}</ErrorMsg>}
        <SubmitBtn
          type="submit"
          variant="black"
          disabled={!isDirty || isSubmitting}
        >
          {isLoading ? t('loading.text') : t('signIn.submitBtn')}
        </SubmitBtn>
      </StyledForm>
    </>
  );
};
