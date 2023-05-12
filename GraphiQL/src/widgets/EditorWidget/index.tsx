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

interface EditorWidgetProps {
  schema?: GraphQLSchema;
  isLoading: boolean;
}

export default function EditorWidget({ schema, isLoading }: EditorWidgetProps) {
  const [query, setQuery] = useState('');
  const [vars, setVars] = useState('');
  const [headers, setHeaders] = useState('');

  const { response, onClickHandler, isResultLoading } = useFetchUserQuery({ query, vars, headers });

  return (
    <div className="editor-widget">
      <div className="column">
        <div className="editor-wrapper">
          <EditorGraphQL
            value={query}
            schema={schema}
            isLoading={isLoading}
            setValue={setQuery}
          ></EditorGraphQL>
          <div className="editor-controls">
            <SubmitButton onClick={onClickHandler}></SubmitButton>
          </div>
        </div>
        <Tabs
          items={[
            { name: 'Vars', element: <EditorJSON value={vars} setValue={setVars}></EditorJSON> },
            {
              name: 'Headers',
              element: <EditorJSON value={headers} setValue={setHeaders}></EditorJSON>,
            },
          ]}
        />
      </div>
      <div className="column">
        {!isResultLoading ? <ViewJSON value={response}></ViewJSON> : <Spinner></Spinner>}
      </div>
    </div>
  );
}
