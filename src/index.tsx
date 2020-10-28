import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets';

ReactDOM.render(
  <Suspense fallback={<div />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
