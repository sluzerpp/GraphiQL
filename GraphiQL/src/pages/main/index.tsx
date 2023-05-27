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
import ControlButton from '@/shared/ui/ControlButton';

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
            <ControlButton onClick={() => setIsOpen((prev) => !prev)}>
              <svg height="2em" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>docs icon</title>
                <path
                  d="M0.75 3C0.75 4.24264 1.75736 5.25 3 5.25H17.25M0.75 3C0.75 1.75736 1.75736 0.75 3 0.75H16.25C16.8023 0.75 17.25 1.19772 17.25 1.75V5.25M0.75 3V21C0.75 22.2426 1.75736 23.25 3 23.25H18.25C18.8023 23.25 19.25 22.8023 19.25 22.25V6.25C19.25 5.69771 18.8023 5.25 18.25 5.25H17.25"
                  strokeWidth="1.5"
                ></path>
                <line x1="13" y1="11.75" x2="6" y2="11.75" strokeWidth="1.5"></line>
              </svg>
            </ControlButton>
          </div>
          <ControlButton onClick={() => getSchema(true)}>
            <svg
              height="2em"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
              aria-hidden="true"
            >
              <title>reload icon</title>
              <path d="M4.75 9.25H1.25V12.75" strokeWidth="1" strokeLinecap="square"></path>
              <path d="M11.25 6.75H14.75V3.25" strokeWidth="1" strokeLinecap="square"></path>
              <path
                d="M14.1036 6.65539C13.8 5.27698 13.0387 4.04193 11.9437 3.15131C10.8487 2.26069 9.48447 1.76694 8.0731 1.75043C6.66173 1.73392 5.28633 2.19563 4.17079 3.0604C3.05526 3.92516 2.26529 5.14206 1.92947 6.513"
                strokeWidth="1"
              ></path>
              <path
                d="M1.89635 9.34461C2.20001 10.723 2.96131 11.9581 4.05631 12.8487C5.15131 13.7393 6.51553 14.2331 7.9269 14.2496C9.33827 14.2661 10.7137 13.8044 11.8292 12.9396C12.9447 12.0748 13.7347 10.8579 14.0705 9.487"
                strokeWidth="1"
              ></path>
            </svg>
          </ControlButton>
        </ControlSideBar>
        <GraphQLDocs isLoading={isLoading} isOpen={isOpen} schema={schema} />
      </div>
      <EditorWidget schema={schema} isLoading={isLoading} />
    </div>
  );
}
