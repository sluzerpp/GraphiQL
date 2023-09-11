import { memo } from 'react';
import { GraphQLSchema, OperationTypeNode } from 'graphql';
import useHistory from './useHistory';
import GraphQLObject from './GraphQLObject';
import PrevButton from './PrevButton';
import './index.scss';
import Spinner from '@/shared/ui/Spinner';
import { useTranslation } from 'react-i18next';

interface DocsProps {
  schema?: GraphQLSchema;
  isLoading?: boolean;
  isOpen: boolean;
}

const rootTypes = [
  OperationTypeNode.QUERY,
  OperationTypeNode.MUTATION,
  OperationTypeNode.SUBSCRIPTION,
];

function GraphQLDocs({ schema, isLoading, isOpen }: DocsProps) {
  const { t } = useTranslation();
  const { setHistoryObject, goToPrevHistoryObject, clearHistory, currentObject, prevObject } =
    useHistory();

  return (
    <div className={`docs ${isOpen ? 'open' : ''}`}>
      {!isLoading ? (
        schema ? (
          <>
            {prevObject ? (
              <PrevButton name={prevObject.name || 'Unknown'} callback={goToPrevHistoryObject} />
            ) : currentObject ? (
              <PrevButton name={t('main.doc')} callback={clearHistory} />
            ) : null}
            <div className="docs__name">{currentObject ? currentObject.name : t('main.doc')}</div>
            {currentObject ? (
              <GraphQLObject setHistoryItem={setHistoryObject} object={currentObject} />
            ) : (
              <div className="graphql-type__container">
                <div className="graphql-type__title">♦ {t('main.root')}</div>
                {rootTypes.map((rootType) => (
                  <GraphQLObject
                    setHistoryItem={setHistoryObject}
                    isRoot={true}
                    key={rootType}
                    name={rootType}
                    object={schema.getRootType(rootType)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <h2>Схема отсутствует</h2>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default memo(GraphQLDocs);
