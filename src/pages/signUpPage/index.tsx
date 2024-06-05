import { useTranslation } from 'react-i18next';
import GoogleIcon from 'src/assets/icons/iconGoogle';
import LogoIcon from 'src/assets/icons/iconLogo';
import { SignUpForm } from 'src/components/signUpForm';
import {
  SignUpSection,
  PolicyLink,
  LogoContainer,
  ListContainer,
  FormHeader,
} from './styles';
import {
  LogoWrap,
  Title,
  SubTitle,
  Google,
  Text,
  SignUpLink,
} from '../signInPage/style';
import { FormContainer } from 'src/pages/verifyEmailPage/styles.ts';
import bgImg from '../../assets/images/sign-up.png';
import { ArrowBackLink } from 'components/arrowBackLink';
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
            {t('signUp.title')}
          </Title>
          <SubTitle>{t('signUp.subtitle')}</SubTitle>
          <Google type="button">
            <GoogleIcon />
            {t('signUp.google')}
          </Google>
          <Text>or</Text>
        </FormHeader>
        <SignUpForm />
        <SignUpLink to="/signin">
          <p>{t('signUp.signInLink')}</p>
          <span>{t('signUp.signIn')}</span>
        </SignUpLink>
        <ListContainer>
          <li>
            <PolicyLink to="/privacy-policy">
              {t('signUp.policyLink')}
            </PolicyLink>
          </li>
          <li>
            <PolicyLink to="/terms-of-use">{t('signUp.termsLink')}</PolicyLink>
          </li>
        </ListContainer>
      </FormContainer>
    </SignUpSection>
  );
};

export default SignUpPage;
