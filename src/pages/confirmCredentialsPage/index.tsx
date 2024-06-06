import { ConfirmCredentialsForm } from 'src/components/confirmCredentialsForm';
import { StyledFormWrapper, StyledFormContainer } from './styles';
import { useTranslation } from 'react-i18next';
import bgImg from 'src/assets/images/sign-up.png';
import { LogoContainer, SignUpSection } from 'src/pages/signUpPage/styles.ts';
import { ArrowBackLink } from 'components/arrowBackLink';
import { Title } from 'src/pages/signInPage/style.ts';
import { useSearchParams } from 'react-router-dom';
import { useGetUserMutation } from 'src/redux/authApiSlice.ts';
import { useEffect, useState } from 'react';

const ConfirmCredentialsPage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [getUser] = useGetUserMutation();

  const [user, setUser] = useState({ email: '', full_name: '', user_id: '' });

  const token = searchParams.get('token');

  console.log(user);
  const getInfo = async () => {
    if (token) {
      const data = await getUser({ token }).unwrap();
      setUser({ ...data });
    }
  };
  useEffect(() => {
    getInfo();
  });

  return (
    <SignUpSection>
      <LogoContainer img={bgImg}></LogoContainer>
      <StyledFormContainer>
        <Title>
          <ArrowBackLink link={'/faq_team_fe/signin'} />
          {t('confirmCredentials.title')}
        </Title>
        <StyledFormWrapper>
          <ConfirmCredentialsForm
            email_value={user.email}
            full_name={user.full_name}
            id={user.user_id}
          />
        </StyledFormWrapper>
      </StyledFormContainer>
    </SignUpSection>
  );
};

export default ConfirmCredentialsPage;
