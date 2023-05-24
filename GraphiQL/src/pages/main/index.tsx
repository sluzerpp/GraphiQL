import EditorWidget from 'widgets/EditorWidget';
import styles from './index.module.scss';
import useSchema from 'features/useSchema';
import SubmitButton from 'shared/ui/SubmitButton';
import GraphQLDocs from 'features/GraphQLDocs';
import ControlSideBar from 'entities/ControlSideBar';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'features/authentication/firebase';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const { schema, getSchema, isLoading } = useSchema();
  const [isOpen, setIsOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    if (error) console.log(error);
  });

  return (
    <div className={styles.main}>
      <div className={styles.doc}>
        <ControlSideBar>
          <div className="group">
            <SubmitButton onClick={() => setIsOpen((prev) => !prev)} />
          </div>
          <SubmitButton onClick={() => getSchema(true)} />
        </ControlSideBar>
        <GraphQLDocs isLoading={isLoading} isOpen={isOpen} schema={schema} />
      </div>
      <EditorWidget schema={schema} isLoading={isLoading} />
    </div>
  );
}
