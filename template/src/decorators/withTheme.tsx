import React from 'react';
import { ThemeProvider as UI5ThemeProvider } from '@ui5/webcomponents-react/dist/ThemeProvider';
import '@ui5/webcomponents-theme-base/dist/Assets';
import '@ui5/webcomponents/dist/generated/json-imports/Themes';
import '@ui5/webcomponents-fiori/dist/generated/json-imports/Themes';

export const withTheme = (Component: React.ComponentType): React.ComponentType => {
  const WrappedComponent: React.FC = () => (
    <UI5ThemeProvider>
      <Component />
    </UI5ThemeProvider>
  );
  WrappedComponent.displayName = `withTheme`;
  return WrappedComponent;
};
