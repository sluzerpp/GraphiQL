import axios from 'axios';
import { getIntrospectionQuery } from 'graphql';
import { API_URL } from 'shared/constants';
import { GraphQLResponse } from '../types';

type RequestParams = {
  query: string;
  operationName?: string;
  headers?: {
    [key: string]: string;
  };
  vars?: object;
};

export const fetchUserQuery = async (data: RequestParams) => {
  const { query, headers, vars } = data;
  const response = await axios.post<GraphQLResponse>(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    query,
    variables: vars,
  });
  return response.data;
};

// Use IIFE for simple memo function
export const fetchSchema = (() => {
  let schema: GraphQLResponse;
  return async (update = false) => {
    if (!schema || update) {
      const response = await axios.post<GraphQLResponse>(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        query: getIntrospectionQuery(),
        operationName: 'IntrospectionQuery',
      });
      return response.data;
    }
    return schema;
  };
})();
