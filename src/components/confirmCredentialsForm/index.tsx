import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useUpdateMutation } from 'src/redux/authApiSlice';
import { StyledForm, SubmitBtn, ErrorMsg } from './styles';
import { Inputs, Props } from './types';
import { confirmSchema } from './validation';
import { ButtonVariant } from '../button/types';

export const ConfirmCredentialsForm = ({ email_value }: Props) => {
  const { t } = useTranslation();
  const [update, { isLoading }] = useUpdateMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: `${email_value}`,
      user_name: 'hjfvgjhb',
    },
    resolver: yupResolver(confirmSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await update({ id: 'id', data }).unwrap();
    } catch (error) {
      console.log(error);
    }
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
            disabled
            {...register('email')}
            className={errors.email ? 'error-input' : ''}
            placeholder={t('confirmCredentials.emailPlaceholder')}
            id="user-email"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </div>
        <SubmitBtn type="submit" variant={ButtonVariant.Black}>
          {isLoading ? t('loading.text') : t('confirmCredentials.submitBtn')}
        </SubmitBtn>
      </StyledForm>
    </>
  );
};
