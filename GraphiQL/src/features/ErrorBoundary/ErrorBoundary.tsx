import React from 'react';
import { auth } from '../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

type ErrorBoundaryProps = {
  fallback: React.ReactNode;
  children: React.ReactNode;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ fallback, children }) => {
  //const [hasError, setHasError] = useState(false);
  const [AuthError] = useAuthState(auth);

  const logErrorToMyService = (error: Error, componentStack: string | null) => {
    // Implement your error logging logic here
    if (AuthError) console.log('Я ошибка Firebase>>>', AuthError);
    console.error(error);
    console.log(componentStack);
  };

  const handleComponentError = (error: Error, info: React.ErrorInfo) => {
    //setHasError(true);
    logErrorToMyService(error, info.componentStack);
  };

  if (AuthError) {
    return <>{fallback}</>;
  }
  return (
    <>
      {React.Children.map(children, (child) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.cloneElement(child as React.ReactElement<any>, {
          onError: handleComponentError,
        })
      )}
    </>
  );
};

export default ErrorBoundary;
