import ReactDOM from 'react-dom/client';
import App from 'app';
import React from 'react';
import Icon from 'shared/ui/Icon/Icon';
import './i18n';
import classes from './shared/ui/Button/style.module.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<Icon className={classes.loader} type="loader" />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
