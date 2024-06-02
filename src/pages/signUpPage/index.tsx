import { useTranslation } from 'react-i18next';
import GoogleIcon from 'src/assets/icons/iconGoogle';
import LogoIcon from 'src/assets/icons/iconLogo';
import { SignUpForm } from 'src/components/signUpForm';
import { SignUpSection, PolicyLink, SignUpFormWrap } from './styles';
import {
  FlexWrap,
  LogoWrap,
  Title,
  SubTitle,
  Google,
  Text,
  SignUpLink,
} from '../signInPage/style';
const SignUpPage = () => {
  const { t } = useTranslation();
  return (
    <SignUpSection>
      <FlexWrap>
        <LogoWrap>
          <LogoIcon width={203} height={56} />
        </LogoWrap>
        <SignUpFormWrap>
          <div>
            <Title>{t('signUp.title')}</Title>
            <SubTitle>{t('signUp.subtitle')}</SubTitle>
            <Google type="button">
              <GoogleIcon />
              {t('signUp.google')}
            </Google>
            <Text>or</Text>
          </div>
          <div>
            <SignUpForm />
            <SignUpLink to="/signin">
              <p>{t('signUp.signInLink')}</p>
              <span>{t('signUp.signIn')}</span>
            </SignUpLink>
            <ul>
              <li>
                <PolicyLink to="/privacy-policy">
                  {t('signUp.policyLink')}
                </PolicyLink>
              </li>
              <li>
                <PolicyLink to="/terms-of-use">
                  {t('signUp.termsLink')}
                </PolicyLink>
              </li>
            </ul>
          </div>
        </SignUpFormWrap>
      </FlexWrap>
    </SignUpSection>
  );
};

export default SignUpPage;
