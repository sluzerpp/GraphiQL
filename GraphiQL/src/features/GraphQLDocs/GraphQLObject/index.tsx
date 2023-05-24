import { GraphQLInputObjectType, GraphQLObjectType, GraphQLScalarType } from 'graphql';
import { GraphQLUnknownObject } from '../types';
import RootElem from './RootElem';
import FieldElem from './FieldElem';
import ScalarElem from './ScalarElem';
import './index.scss';
import { useTranslation } from 'react-i18next';

interface GraphQLObjectProps {
  object: GraphQLUnknownObject;
  name?: string;
  isRoot?: boolean;
  setHistoryItem: (object: GraphQLUnknownObject) => void;
}

export default function GraphQLObject({
  object,
  name,
  isRoot,
  setHistoryItem,
}: GraphQLObjectProps) {
  const { t } = useTranslation();
  if (object instanceof GraphQLObjectType || object instanceof GraphQLInputObjectType) {
    if (isRoot) {
      return <RootElem object={object} setHistoryItem={setHistoryItem} name={name} />;
    }

    const fieldMap = object.getFields();
    const keys = Object.keys(fieldMap);
    return (
      <div className="graphql-type__container">
        <div className="graphql-type__title">• {t('main.field')}</div>
        <div className="graphql-type__fields">
          {keys.map((key) => (
            <FieldElem key={key} setHistoryItem={setHistoryItem} object={fieldMap[key]} />
          ))}
        </div>
      </div>
    );
  }

  if (object instanceof GraphQLScalarType) {
    return <ScalarElem object={object}></ScalarElem>;
  }

  return <></>;
}
