'use client';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ErrorFallbackProps {
  errorMessage?: string;
}
export default function ErrorFallback({ errorMessage }: ErrorFallbackProps): JSX.Element {
  React.useEffect(() => {
    console.log(errorMessage);
    toast.error(`Error ${errorMessage}`);
  });
  console.log(errorMessage);
  return (
    <>
      <div>
        <p>Oops! Something went wrong.</p>
        <p>Error:</p>
        <ToastContainer />
      </div>
    </>
  );
}
