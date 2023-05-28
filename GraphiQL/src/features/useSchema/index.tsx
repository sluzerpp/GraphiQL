import { GraphQLSchema, buildClientSchema } from 'graphql';
import { useState, useEffect } from 'react';
import { fetchSchema } from 'shared/api/makeRequest';
import { IntrospectionQuery } from 'shared/types';

export default function useSchema() {
  const [schema, setSchema] = useState<GraphQLSchema>();
  const [isLoading, setIsLoading] = useState(false);
  const [rawSchema, setRawSchema] = useState<IntrospectionQuery>();

  const getSchema = (update?: boolean) => {
    setIsLoading(true);
    fetchSchema(update)
      .then((val) => {
        setSchema(buildClientSchema(val.data));
        setRawSchema(val.data as unknown as IntrospectionQuery);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getSchema();
  }, []);

  return {
    schema,
    getSchema,
    isLoading,
    rawSchema,
  };
}
