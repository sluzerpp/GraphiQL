import { AxiosError } from 'axios';
import { useState } from 'react';
import { fetchUserQuery } from 'shared/api/makeRequest';
import { createHeadersError, createVariablesError } from 'shared/error';

interface UseFetchUserQueryProps {
  query: string;
  vars: string;
  headers: string;
}

export default function useFetchUserQuery({ query, vars, headers }: UseFetchUserQueryProps) {
  const [response, setResponse] = useState('');
  const [isResultLoading, setIsResultLoading] = useState(false);

  const onClickHandler = () => {
    let headersObject: object = {};
    if (headers.length !== 0) {
      try {
        headersObject = JSON.parse(headers);
      } catch (error) {
        setResponse(JSON.stringify(createHeadersError(), null, 2));
        return;
      }
    }
    let varsObject: object = {};
    if (vars.length > 0) {
      try {
        varsObject = JSON.parse(vars);
      } catch (error) {
        setResponse(JSON.stringify(createVariablesError(), null, 2));
        return;
      }
    }
    setIsResultLoading(true);
    fetchUserQuery({
      query,
      headers: headersObject,
      vars: varsObject,
    })
      .then((val) => {
        setResponse(JSON.stringify(val, null, 2));
      })
      .catch((err: AxiosError) => {
        setResponse(JSON.stringify(err.response?.data, null, 2));
      })
      .finally(() => {
        setIsResultLoading(false);
      });
  };

  return { response, onClickHandler, isResultLoading };
}
