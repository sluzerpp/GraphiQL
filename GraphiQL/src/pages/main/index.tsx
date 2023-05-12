import EditorWidget from 'widgets/EditorWidget';
import styles from './index.module.scss';
import useSchema from 'features/useSchema';
import SubmitButton from 'shared/ui/SubmitButton';

export default function MainPage() {
  const { schema, getSchema, isLoading } = useSchema();

  console.log(isLoading);

  return (
    <div className={styles.main}>
      <div className="doc">
        <SubmitButton onClick={() => getSchema(true)}></SubmitButton>
      </div>
      <EditorWidget schema={schema} isLoading={isLoading}></EditorWidget>
    </div>
  );
}
