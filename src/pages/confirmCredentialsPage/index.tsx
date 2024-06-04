import img from 'src/assets/images/sign-up.png';
import { ConfirmCredentialsForm } from 'src/components/confirmCredentialsForm';
import {
  StyledContainerFluid,
  StyledFormWrapper,
  StyledImg,
  StyledImgWrapper,
  StyledFormContainer,
  StyledTitle,
  StyledSection,
} from './styles';
import { useTranslation } from 'react-i18next';

const ConfirmCredentialsPage = () => {
  const { t } = useTranslation();
  return (
    <StyledSection>
      <StyledContainerFluid>
        <StyledImgWrapper>
          <StyledImg src={img} />
        </StyledImgWrapper>
        <StyledFormContainer>
          <StyledTitle>{t('confirmCredentials.title')}</StyledTitle>
          <StyledFormWrapper>
            <ConfirmCredentialsForm />
          </StyledFormWrapper>
        </StyledFormContainer>
      </StyledContainerFluid>
    </StyledSection>
  );
};

export default ConfirmCredentialsPage;
