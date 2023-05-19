import { GraphQLUnknownObject } from 'features/GraphQLDocs/types';
import { GraphQLInputObjectType, GraphQLObjectType } from 'graphql';

type RootElemProps = {
  setHistoryItem: (object: GraphQLUnknownObject) => void;
  object: GraphQLObjectType | GraphQLInputObjectType;
  name?: string;
};

export default function RootElem({ object, setHistoryItem, name }: RootElemProps) {
  return (
    <div className="graphql-type">
      <div className="graphql-type__name">{name || 'Неизвестно'}</div>
      <button onClick={() => setHistoryItem(object)}>{object.name}</button>
    </div>
  );
}
