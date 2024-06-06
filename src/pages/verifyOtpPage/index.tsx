import { OtpForm } from 'components/otpForm';
import { FormContainer } from 'src/pages/verifyEmailPage/styles.ts';
import { useTranslation } from 'react-i18next';
import {
  FormHeader,
  LogoContainer,
  SignUpSection,
} from 'src/pages/signUpPage/styles.ts';
import bgImg from 'src/assets/images/sign-in.png';
import { SubTitle, Title } from 'src/pages/signInPage/style.ts';
import { ArrowBackLink } from 'components/arrowBackLink';
import { useAppSelector } from 'src/redux/hooks.ts';

export const VerifyOtpPage = () => {
  const { t } = useTranslation();
  const user = useAppSelector(state => state.auth.user);
  return (
    <SignUpSection>
      <LogoContainer img={bgImg}></LogoContainer>
      <FormContainer>
        <FormHeader>
          <ArrowBackLink link={'/faq_team_fe/signin'} />
          <Title>{t('enterCode.title')}</Title>
          <SubTitle>{t('enterCode.subtitle')}</SubTitle>
        </FormHeader>
        <OtpForm email={user.email} action={'newPass'} />
      </FormContainer>
    </SignUpSection>
  );
};

export default VerifyOtpPage;
