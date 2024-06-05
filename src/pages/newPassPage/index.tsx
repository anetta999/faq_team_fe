import { useTranslation } from 'react-i18next';
import LogoIcon from 'src/assets/icons/iconLogo';
import { NewPassForm } from 'src/components/newPassForm';
import { ArrowBackLink } from 'src/components/arrowBackLink';
import { LogoWrap, Title, SubTitle } from '../signInPage/style';
import {
  FormHeader,
  LogoContainer,
  SignUpSection,
} from 'src/pages/signUpPage/styles.ts';
import bgImg from 'src/assets/images/new-pass.png';
import { FormContainer } from 'src/pages/verifyEmailPage/styles.ts';
const SignUpPage = () => {
  const { t } = useTranslation();
  return (
    <SignUpSection>
      <LogoContainer img={bgImg}>
        <LogoWrap>
          <LogoIcon width={203} height={56} />
        </LogoWrap>
      </LogoContainer>
      <FormContainer>
        <FormHeader>
          <Title>
            <ArrowBackLink link={'/faq_team_fe/signin'} />
            {t('restorePasswordSignIn.title')}
          </Title>
          <SubTitle>{t('restorePasswordSignIn.subtitle')}</SubTitle>
        </FormHeader>
        <NewPassForm />
      </FormContainer>
    </SignUpSection>
  );
};

export default SignUpPage;
