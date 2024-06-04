import { useTranslation } from 'react-i18next';
import {
  InputContainer,
  OtpFrom,
  ResendButton,
  VerifyBtn,
  VerifyInfoContainer,
} from 'components/otpForm/styles.ts';

export const OtpForm = () => {
  const { t } = useTranslation();

  return (
    <OtpFrom>
      <InputContainer>
        {new Array(6).fill(null).map(index => {
          return <input key={index} type={'text'} placeholder={'1'} />;
        })}
      </InputContainer>
      <VerifyInfoContainer>
        <div>{t('verificationEmail.expired')}</div>
        <ResendButton>{t('verificationEmail.resend')}</ResendButton>
      </VerifyInfoContainer>
      <VerifyBtn type={'submit'} variant="black">
        {t('verificationEmail.submitBtn')}
      </VerifyBtn>
    </OtpFrom>
  );
};
