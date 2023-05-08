import CodeMirrorEditor, { EditorProps } from '../../shared/ui/Editor';
import { json } from '@codemirror/lang-json';

export default function ViewJSON(props: EditorProps) {
  const ext = [json().extension];

  if (props.extensions) {
    ext.push(...props.extensions);
  }

  return CodeMirrorEditor({
    ...props,
    className: 'view',
    extensions: ext,
    readOnly: true,
  });
}
