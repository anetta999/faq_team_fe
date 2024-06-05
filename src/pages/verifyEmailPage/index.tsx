import { OtpForm } from 'components/otpForm';
import {
  FormContainer,
  ImageContainer,
  StyledEmailVerifyContainer,
  VerifySubTitle,
  VerifyTitle,
} from 'src/pages/verifyEmailPage/styles.ts';
import image from '../../assets/images/verification.png';
import { useTranslation } from 'react-i18next';

export const VerifyEmailPage = () => {
  const { t } = useTranslation();
  return (
    <StyledEmailVerifyContainer>
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
      <FormContainer>
        <VerifyTitle>{t('verificationEmail.title')}</VerifyTitle>
        <VerifySubTitle>{t('verificationEmail.subtitle')}</VerifySubTitle>
        <OtpForm />
      </FormContainer>
    </StyledEmailVerifyContainer>
  );
};

export default VerifyEmailPage;
