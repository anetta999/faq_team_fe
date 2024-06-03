import { useTranslation } from 'react-i18next';
import { MainTitle, StyledSection, Text, Title, Wrapper } from './styles';
import { MainHeading } from 'src/components/mainHeading';

export const TermsOfUsePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainHeading>Terms & Conditions</MainHeading>
      <StyledSection>
        <Wrapper>
          <div>
            <MainTitle>{t('termsConditions.title')}</MainTitle>
            <Text>{t('termsConditions.text')}</Text>
          </div>
          <div>
            <Title>{t('termsConditions.title')}</Title>
            <Text>{t('termsConditions.text')}</Text>
          </div>
          <div>
            <Title>{t('termsConditions.title')}</Title>
            <Text>{t('termsConditions.text')}</Text>
          </div>
          <div>
            <Title>{t('termsConditions.title')}</Title>
            <Text>{t('termsConditions.text')}</Text>
          </div>
          <div>
            <Title>{t('termsConditions.title')}</Title>
            <Text>{t('termsConditions.text')}</Text>
          </div>
          <div>
            <Title>{t('termsConditions.title')}</Title>
            <Text>{t('termsConditions.text')}</Text>
          </div>
        </Wrapper>
      </StyledSection>
    </>
  );
};

export default TermsOfUsePage;
