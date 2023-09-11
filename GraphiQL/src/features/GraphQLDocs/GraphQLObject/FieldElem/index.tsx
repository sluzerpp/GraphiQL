import { GraphQLUnknownObject } from 'features/GraphQLDocs/types';
import { GraphQLField, GraphQLInputField } from 'graphql';
import getOutputTypeString from '../helpers/getTypeString';
import getArgString from '../helpers/getArgString';

type FieldElemProps = {
  setHistoryItem: (object: GraphQLUnknownObject) => void;
  object: GraphQLField<unknown, unknown> | GraphQLInputField;
};

export default function FieldElem({ object, setHistoryItem }: FieldElemProps) {
  return (
    <div className="graphql-type">
      <div className="graphql-type__name">{object.name}</div>
      {'args' in object && object.args.length > 0 && (
        <div className="graphql-type__args">
          {`(`}
          {object.args.map((arg, id) => {
            const [name, type] = getArgString(arg);
            return (
              <div key={arg.name} className="graphql-type__arg">
                {`${name}: `}
                <button onClick={() => setHistoryItem(arg.type)}>{type}</button>
                {id < object.args.length - 1 && ','}
              </div>
            );
          })}
          {')'}
        </div>
      )}
      {' : '}
      <button onClick={() => setHistoryItem(object.type)}>
        {getOutputTypeString(object.type)}
      </button>
      {object.description && <div className="graphql-type__description">{object.description}</div>}
    </div>
  );
}
