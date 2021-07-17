/* eslint-disable no-param-reassign */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { parse } from 'properties-parser';
import SapUiLanguageDetector from './SapUiLanguageDetector';

const lngDetector = new LanguageDetector();
lngDetector.addDetector(new SapUiLanguageDetector());

i18n
  .use(XHR)
  .use(lngDetector) // detects browser lang
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    saveMissing: true,
    fallbackLng: 'i18n',
    defaultNS: '',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    detection: {
      // order and from where user language should be detected
      order: ['sapUiLanguageDetector', 'navigator'],
    },
    backend: {
      parse: (data: string): void => parse(data),
      loadPath: (language: string): string => {
        if (language[0] === 'i18n') {
          language = '';
        } else {
          language = `_${language}`;
        }
        return `/i18n/i18n${language}.properties`;
      },
    },
  });

export default i18n;
