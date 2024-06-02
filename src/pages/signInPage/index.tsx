import { useTranslation } from 'react-i18next';
import { SignInForm } from 'src/components/signInForm';
import {
  SignUpLink,
  SubTitle,
  Title,
  Google,
  Text,
  SignInSection,
  FlexWrap,
  FormWrap,
  LogoWrap,
} from './style';
import GoogleIcon from 'src/assets/icons/iconGoogle';
import LogoIcon from 'src/assets/icons/iconLogo';

const SignInPage = () => {
  const { t } = useTranslation();
  return (
    <SignInSection>
      <FlexWrap>
        <LogoWrap>
          <LogoIcon width={203} height={56} />
        </LogoWrap>
        <FormWrap>
          <Title>{t('signIn.title')}</Title>
          <SubTitle>{t('signIn.subtitle')}</SubTitle>
          <Google type="button">
            <GoogleIcon />
            {t('signIn.google')}
          </Google>
          <Text>or</Text>
          <SignInForm />
          <SignUpLink to="/signup">
            <p>{t('signIn.signUpLink')}</p>
            <span>{t('signIn.signUp')}</span>
          </SignUpLink>
        </FormWrap>
      </FlexWrap>
    </SignInSection>
  );
};

export default SignInPage;
