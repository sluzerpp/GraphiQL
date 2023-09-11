import CodeMirrorEditor, { EditorProps } from '../../shared/ui/Editor';
import { json } from '@codemirror/lang-json';
import './index.scss';
import { useTranslation } from 'react-i18next';

export default function ViewJSON(props: EditorProps) {
  const ext = [json().extension];
  const { t } = useTranslation();

  if (props.extensions) {
    ext.push(...props.extensions);
  }

  return CodeMirrorEditor({
    ...props,
    className: 'view',
    extensions: ext,
    readOnly: true,
    placeholder: t('main.placeholder.view').toString(),
  });
}
