import EditorGraphQL from 'features/EditorGraphQL';
import EditorJSON from 'features/EditorJSON';
import ViewJSON from 'features/ViewJSON';
import { useState } from 'react';
import { fetchUserQuery } from 'shared/api/makeRequest';
import SubmitButton from 'shared/ui/SubmitButton';
import './index.scss';
import { AxiosError } from 'axios';

export default function EditorWidget() {
  const [query, setQuery] = useState('');
  const [vars, setVars] = useState('');
  const [response, setResponse] = useState('');

  const onClickHandler = () => {
    fetchUserQuery({
      query,
      vars: vars ? JSON.parse(vars) : {},
    })
      .then((val) => {
        setResponse(JSON.stringify(val, null, 2));
      })
      .catch((err: AxiosError) => {
        setResponse(JSON.stringify(err.response?.data, null, 2));
      });
  };

  return (
    <div className="editor-widget">
      <div className="column">
        <div className="editor-wrapper">
          <EditorGraphQL value={query} setValue={setQuery}></EditorGraphQL>
          <div className="editor-controls">
            <SubmitButton onClick={onClickHandler}></SubmitButton>
          </div>
        </div>
        <EditorJSON value={vars} setValue={setVars}></EditorJSON>
      </div>
      <div className="column">
        <ViewJSON value={response}></ViewJSON>
      </div>
    </div>
  );
}
