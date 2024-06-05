import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { RestorePass } from '../signInForm/types';
import { StyledForm, SubmitBtn, ErrorMsg } from '../signInForm/styles';
import { useLoginMutation } from 'src/redux/authApiSlice';

export const RestorePassForm = () => {
  const [restorePass, { isLoading, isError }] = useLoginMutation();
  const { t } = useTranslation();
  const signInSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email(t('validation.email'))
        .required(t('validation.creadentials')),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<RestorePass>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<RestorePass> = data => {
    restorePass(data);
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
        {isError && <ErrorMsg>{t('validation.server')}</ErrorMsg>}
        <SubmitBtn
          type="submit"
          variant="black"
          disabled={!isDirty || isSubmitting}
        >
          {isLoading ? t('loading.text') : t('restorePassword.button')}
        </SubmitBtn>
      </StyledForm>
    </>
  );
};
