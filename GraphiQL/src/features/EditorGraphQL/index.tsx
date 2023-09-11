import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import CodeMirrorEditor, { EditorProps } from 'shared/ui/Editor';
import Spinner from 'shared/ui/Spinner';

interface EditorGraphQLProps extends EditorProps {
  schema?: GraphQLSchema;
  isLoading: boolean;
}

function EditorGraphQL({ schema, isLoading, ...props }: EditorGraphQLProps) {
  const ext = [];
  const { t } = useTranslation();

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
      placeholder: t('main.placeholder.editor').toString(),
    })
  ) : (
    <Spinner />
  );
}

export default memo(EditorGraphQL);
