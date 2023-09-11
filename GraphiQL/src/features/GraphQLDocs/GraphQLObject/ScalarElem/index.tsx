import { GraphQLScalarType } from 'graphql';

type ScalarElemProps = {
  object: GraphQLScalarType;
};

export default function ScalarElem({ object }: ScalarElemProps) {
  return (
    <div className="graphql-type">
      {object.description && <div className="graphql-type__description">{object.description}</div>}
    </div>
  );
}
