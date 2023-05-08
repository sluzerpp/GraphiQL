import { useEffect, useState } from 'react';
import { graphql } from 'cm6-graphql';
import { buildClientSchema, buildSchema, GraphQLSchema } from 'graphql';
import CodeMirrorEditor, { EditorProps } from 'shared/ui/Editor';
import { fetchSchema } from 'shared/api/makeRequest';
import Spinner from 'shared/ui/Spinner';

export default function EditorGraphQL(props: EditorProps) {
  const [schema, setSchema] = useState<GraphQLSchema>();
  const ext = [...graphql(schema)];

  if (props.extensions) {
    ext.push(...props.extensions);
  }

  useEffect(() => {
    fetchSchema()
      .then((val) => {
        setSchema(buildClientSchema(val.data));
      })
      .catch(() => {
        setSchema(buildSchema(`type query`));
      });
  }, []);

  return schema ? (
    CodeMirrorEditor({
      ...props,
      extensions: ext,
    })
  ) : (
    <Spinner />
  );
}
