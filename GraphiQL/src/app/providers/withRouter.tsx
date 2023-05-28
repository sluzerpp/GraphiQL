import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function withRouter(component: () => ReactNode) {
  return () => <BrowserRouter>{component()}</BrowserRouter>;
}
