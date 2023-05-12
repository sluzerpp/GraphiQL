import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';
import CodeMirrorEditor, { EditorProps } from 'shared/ui/Editor';
import Spinner from 'shared/ui/Spinner';

interface EditorGraphQLProps extends EditorProps {
  schema?: GraphQLSchema;
  isLoading: boolean;
}

export default function EditorGraphQL({ schema, isLoading, ...props }: EditorGraphQLProps) {
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
