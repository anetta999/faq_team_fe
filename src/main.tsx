import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/Theme.ts';
import { globalStyles } from './styles/GlobalStyles.ts';
import { Global, ThemeProvider } from '@emotion/react';
import './translation/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="faq_team_fe">
        <App />
      </BrowserRouter>
      <Global styles={globalStyles} />
    </ThemeProvider>
  </React.StrictMode>,
);
