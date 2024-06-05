import { useTranslation } from 'react-i18next';
import { RestorePassForm } from 'src/components/restorePassForm';
import { ArrowBackLink } from 'src/components/arrowBackLink';

import { SubTitle, Title, LogoWrap } from '../signInPage/style';
import LogoIcon from 'src/assets/icons/iconLogo';
import bgImg from 'src/assets/images/restore-pass.png';
import {
  FormHeader,
  LogoContainer,
  SignUpSection,
} from 'src/pages/signUpPage/styles.ts';
import { FormContainer } from 'src/pages/verifyEmailPage/styles.ts';

const RestorePassPage = () => {
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
            {t('restorePassword.title')}
          </Title>
          <SubTitle>{t('restorePassword.subtitle')}</SubTitle>
        </FormHeader>
        <RestorePassForm />
      </FormContainer>
    </SignUpSection>
  );
};

export default RestorePassPage;
