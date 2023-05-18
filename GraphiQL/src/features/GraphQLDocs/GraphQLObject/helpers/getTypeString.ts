import {
  GraphQLInputObjectType,
  GraphQLInputType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLScalarType,
} from 'graphql';

const getOutputTypeString = (object: GraphQLOutputType | GraphQLInputType): string => {
  if (object instanceof GraphQLNonNull) {
    return `${getOutputTypeString(object.ofType)}!`;
  }
  if (object instanceof GraphQLObjectType || object instanceof GraphQLInputObjectType) {
    return object.name;
  }
  if (object instanceof GraphQLScalarType) {
    return object.name;
  }
  if (object instanceof GraphQLList) {
    return `[${getOutputTypeString(object.ofType)}]`;
  }
  return 'Unknown';
};

export default getOutputTypeString;
