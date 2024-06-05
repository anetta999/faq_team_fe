import { useTranslation } from 'react-i18next';
import LogoIcon from 'src/assets/icons/iconLogo';
import { NewPassForm } from 'src/components/newPassForm';
import { NewPassSection, NewPassFormWrap } from './style';
import { ArrowBackLink } from 'src/components/arrowBackLink';
import { FlexWrap, LogoWrap, Title, SubTitle } from '../signInPage/style';
const SignUpPage = () => {
  const { t } = useTranslation();
  return (
    <NewPassSection>
      <FlexWrap>
        <LogoWrap>
          <LogoIcon width={203} height={56} />
        </LogoWrap>
        <NewPassFormWrap>
          <div>
            <Title>
              <ArrowBackLink link={'/faq_team_fe/signin'} />
              {t('restorePasswordSignIn.title')}
            </Title>
            <SubTitle>{t('restorePasswordSignIn.subtitle')}</SubTitle>
            <NewPassForm />
          </div>
        </NewPassFormWrap>
      </FlexWrap>
    </NewPassSection>
  );
};

export default SignUpPage;
