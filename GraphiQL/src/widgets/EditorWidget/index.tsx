import EditorGraphQL from 'features/EditorGraphQL';
import EditorJSON from 'features/EditorJSON';
import ViewJSON from 'features/ViewJSON';
import { useState } from 'react';
import SubmitButton from 'shared/ui/SubmitButton';
import './index.scss';
import { GraphQLSchema } from 'graphql';
import Spinner from 'shared/ui/Spinner';
import useFetchUserQuery from 'features/useFetchUserQuery';
import Tabs from 'features/Tabs';
import { useTranslation } from 'react-i18next';

interface EditorWidgetProps {
  schema?: GraphQLSchema;
  isLoading: boolean;
}

export default function EditorWidget({ schema, isLoading }: EditorWidgetProps) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [vars, setVars] = useState('');
  const [headers, setHeaders] = useState('');

  const { response, onClickHandler, isResultLoading } = useFetchUserQuery({ query, vars, headers });

  return (
    <div className="editor-widget">
      <div className="column">
        <div className="editor-wrapper">
          <EditorGraphQL value={query} schema={schema} isLoading={isLoading} setValue={setQuery} />
          <div className="editor-controls">
            <SubmitButton onClick={onClickHandler} />
          </div>
        </div>
        <Tabs
          items={[
            {
              name: t('main.var'),
              element: <EditorJSON value={vars} setValue={setVars} />,
            },
            {
              name: t('main.head'),
              element: <EditorJSON value={headers} setValue={setHeaders} />,
            },
          ]}
        />
      </div>
      <div className="column">{!isResultLoading ? <ViewJSON value={response} /> : <Spinner />}</div>
    </div>
  );
}
