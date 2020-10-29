import React from 'react';
import 'i18n/i18n';
import { compose } from 'lodash/fp';
import { Header } from 'components/Header';
import { withTheme } from 'decorators/withTheme';

const App: React.FC = () => {
  return <Header />;
};

export default compose(withTheme)(App);
