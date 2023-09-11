import { GraphQLArgument, GraphQLNonNull } from 'graphql';
import getOutputTypeString from './getTypeString';

const getArgString = (object: GraphQLArgument): string[] => {
  const type = object.type;
  if (type instanceof GraphQLNonNull) {
    return [object.name, `${getOutputTypeString(type.ofType)}!`];
  }
  return [object.name, getOutputTypeString(type)];
};

export default getArgString;
