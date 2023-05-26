'use client';
import { ErrorBoundary } from 'react-error-boundary';
import ReactDOM from 'react-dom/client';
import App from 'app';
import React from 'react';
import Icon from 'shared/ui/Icon/Icon';
import './i18n';
import classes from './shared/ui/Button/style.module.scss';
import ErrorFallback from './features/authentication/ErrorFallback/ErrorFallback';
import 'react-toastify/dist/ReactToastify.css';
const logError = (error: Error, info: { componentStack: string }) => {
  console.log('Я ошибка из ErrorBoundary ', error);
  console.log('Я info из ErrorBoundary ', info);
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<Icon className={classes.loader} type="loader" />}>
      <ErrorBoundary
        fallback={<ErrorFallback errorMessage="Oops! Something went wrong." />}
        onError={logError}
      >
        <App />
      </ErrorBoundary>
    </React.Suspense>
  </React.StrictMode>
);
