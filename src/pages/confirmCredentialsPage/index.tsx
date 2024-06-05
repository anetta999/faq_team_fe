import { ConfirmCredentialsForm } from 'src/components/confirmCredentialsForm';
import { StyledFormWrapper, StyledFormContainer } from './styles';
import { useTranslation } from 'react-i18next';
import bgImg from 'src/assets/images/sign-up.png';
import { LogoContainer, SignUpSection } from 'src/pages/signUpPage/styles.ts';
import { ArrowBackLink } from 'components/arrowBackLink';
import { Title } from 'src/pages/signInPage/style.ts';

const ConfirmCredentialsPage = () => {
  const { t } = useTranslation();
  return (
    <SignUpSection>
      <LogoContainer img={bgImg}></LogoContainer>
      <StyledFormContainer>
        <Title>
          <ArrowBackLink link={'/faq_team_fe/signin'} />
          {t('confirmCredentials.title')}
        </Title>
        <StyledFormWrapper>
          <ConfirmCredentialsForm email_value="test@gmail.com" />
        </StyledFormWrapper>
      </StyledFormContainer>
    </SignUpSection>
  );
};

export default ConfirmCredentialsPage;
