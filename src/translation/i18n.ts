import { initReactI18next } from 'react-i18next';

import translationEnglish from './English/translation.json';
import i18next from 'i18next';

const resources = {
  en: { translation: translationEnglish },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
});

export default i18next;
