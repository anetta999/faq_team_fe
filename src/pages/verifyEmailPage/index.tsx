import { OtpForm } from 'components/otpForm';
import { FormContainer } from 'src/pages/verifyEmailPage/styles.ts';
import { useTranslation } from 'react-i18next';
import {
  FormHeader,
  LogoContainer,
  SignUpSection,
} from 'src/pages/signUpPage/styles.ts';
import bgImg from 'src/assets/images/verification.png';
import { SubTitle, Title } from 'src/pages/signInPage/style.ts';
import { ArrowBackLink } from 'components/arrowBackLink';

export const VerifyEmailPage = () => {
  const { t } = useTranslation();
  return (
    <SignUpSection>
      <LogoContainer img={bgImg}></LogoContainer>
      <FormContainer>
        <FormHeader>
          <ArrowBackLink link={'/faq_team_fe/signin'} />
          <Title>{t('verificationEmail.title')}</Title>
          <SubTitle>{t('verificationEmail.subtitle')}</SubTitle>
        </FormHeader>
        <OtpForm />
      </FormContainer>
    </SignUpSection>
  );
};

export default VerifyEmailPage;
