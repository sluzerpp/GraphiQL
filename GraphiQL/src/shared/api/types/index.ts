import { IntrospectionQuery } from 'graphql';

interface GraphQLError {
  message: string;
  extensions: {
    code: string;
    httpStatusCode: number;
  };
}

export interface GraphQLResponse {
  errors?: GraphQLError[];
  data: IntrospectionQuery;
}
