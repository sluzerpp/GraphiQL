import { GraphQLField, GraphQLInputField, GraphQLType } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';

export type GraphQLUnknownObject = Maybe<
  (GraphQLType | GraphQLField<unknown, unknown> | GraphQLInputField) & {
    name?: string;
  }
>;
