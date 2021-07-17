import React from 'react';
import '@ui5/webcomponents-icons/dist/person-placeholder';
import { ShellBar, ShellBarItem } from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ShellBar
      primary-title={t('primary-title')}
      logo={
        <img
          alt="SAP Logo"
          slot="logo"
          src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"
        />
      }
    >
      <ShellBarItem icon="person-placeholder" />
    </ShellBar>
  );
};
