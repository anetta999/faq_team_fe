import { useTranslation } from 'react-i18next';
import { RestorePassForm } from 'src/components/restorePassForm';
import { ArrowBackLink } from 'src/components/arrowBackLink';
import { RestorePassSection } from './style';
import {
  SubTitle,
  Title,
  FlexWrap,
  FormWrap,
  LogoWrap,
} from '../signInPage/style';
import LogoIcon from 'src/assets/icons/iconLogo';

const RestorePassPage = () => {
  const { t } = useTranslation();
  return (
    <RestorePassSection>
      <FlexWrap>
        <LogoWrap>
          <LogoIcon width={203} height={56} />
        </LogoWrap>
        <FormWrap>
          <Title>
            <ArrowBackLink link={'/faq_team_fe/signin'} />
            {t('restorePassword.title')}
          </Title>
          <SubTitle>{t('restorePassword.subtitle')}</SubTitle>
          <RestorePassForm />
        </FormWrap>
      </FlexWrap>
    </RestorePassSection>
  );
};

export default RestorePassPage;
