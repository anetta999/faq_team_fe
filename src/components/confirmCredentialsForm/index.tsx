import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { StyledForm, SubmitBtn, ErrorMsg } from './styles';
import { Inputs } from './types';
import { confirmSchema } from './validation';
import { ButtonVariant } from '../button/types';

export const ConfirmCredentialsForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      user_name: '',
    },
    resolver: yupResolver(confirmSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user_name">{t('confirmCredentials.name')}</label>
          <input
            type="text"
            {...register('user_name')}
            className={errors.user_name ? 'error-input' : ''}
            placeholder={t('confirmCredentials.namePlaceholder')}
            id="user_name"
          />
          {errors.user_name && <ErrorMsg>{errors.user_name.message}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="user-email">{t('confirmCredentials.email')}</label>
          <input
            type="email"
            {...register('email')}
            className={errors.email ? 'error-input' : ''}
            placeholder={t('confirmCredentials.emailPlaceholder')}
            id="user-email"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </div>
        <SubmitBtn
          type="submit"
          variant={ButtonVariant.Black}
          disabled={!isDirty || isSubmitting}
        >
          {t('confirmCredentials.submitBtn')}
          {/* {isLoading ? t('loading.text') : t('signIn.submitBtn')} */}
        </SubmitBtn>
      </StyledForm>
    </>
  );
};
