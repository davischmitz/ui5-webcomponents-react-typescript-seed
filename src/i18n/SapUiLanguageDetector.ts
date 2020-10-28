import { CustomDetector } from 'i18next-browser-languagedetector';
import queryString from 'query-string';

interface LocationQuery {
  'sap-ui-language'?: string;
  'sap-ui-rtl'?: string;
}
/**
 * Custom detector for `?sap-ui-language` query parameter
 */
export default class SapUiLanguageDetector implements CustomDetector {
  name: string;

  constructor() {
    this.name = 'sapUiLanguageDetector';
  }

  lookup = (): string | undefined => {
    let language;
    if (typeof window !== 'undefined') {
      const locationQuery: LocationQuery = queryString.parse(window.location.search);
      if (locationQuery['sap-ui-language'] !== undefined) {
        language = locationQuery['sap-ui-language'];
      }
    }
    return language;
  };
}
