import { GraphQLSchema, buildClientSchema } from 'graphql';
import { useState, useEffect } from 'react';
import { fetchSchema } from 'shared/api/makeRequest';

export default function useSchema() {
  const [schema, setSchema] = useState<GraphQLSchema>();
  const [isLoading, setIsLoading] = useState(false);

  const getSchema = (update?: boolean) => {
    setIsLoading(true);
    fetchSchema(update)
      .then((val) => {
        setSchema(buildClientSchema(val.data));
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
  };
}
