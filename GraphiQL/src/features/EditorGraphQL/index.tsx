import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';
import { memo } from 'react';
import CodeMirrorEditor, { EditorProps } from 'shared/ui/Editor';
import Spinner from 'shared/ui/Spinner';

interface EditorGraphQLProps extends EditorProps {
  schema?: GraphQLSchema;
  isLoading: boolean;
}

function EditorGraphQL({ schema, isLoading, ...props }: EditorGraphQLProps) {
  const ext = [];

  if (schema) {
    ext.push(...graphql(schema));
  }

  if (props.extensions) {
    ext.push(...props.extensions);
  }

  return !isLoading ? (
    CodeMirrorEditor({
      ...props,
      extensions: ext,
    })
  ) : (
    <Spinner />
  );
}

export default memo(EditorGraphQL);
