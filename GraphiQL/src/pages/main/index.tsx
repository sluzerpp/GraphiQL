import EditorWidget from 'widgets/EditorWidget';
import styles from './index.module.scss';
import useSchema from 'features/useSchema';
import SubmitButton from 'shared/ui/SubmitButton';
import GraphQLDocs from 'features/GraphQLDocs';
import ControlSideBar from 'entities/ControlSideBar';
import { useState } from 'react';

export default function MainPage() {
  const { schema, getSchema, isLoading } = useSchema();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.doc}>
        <ControlSideBar>
          <div className="group">
            <SubmitButton onClick={() => setIsOpen((prev) => !prev)}></SubmitButton>
          </div>
          <SubmitButton onClick={() => getSchema(true)}></SubmitButton>
        </ControlSideBar>
        <GraphQLDocs isLoading={isLoading} isOpen={isOpen} schema={schema}></GraphQLDocs>
      </div>
      <EditorWidget schema={schema} isLoading={isLoading}></EditorWidget>
    </div>
  );
}
