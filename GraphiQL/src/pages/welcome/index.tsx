import { useEffect } from 'react';
// import { lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../features/authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { onAuthStateChanged } from 'firebase/auth';
import Creator from 'entities/creator';
import classes from './style.module.scss';
import Section from 'entities/section';
import { useTranslation } from 'react-i18next';
import { CreatorType, SectionType } from 'type';

export default function Welcome() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  console.log(user);
  useEffect(() => {
    // токен авторизации
    //const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // const uid = user.uid;
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('We have User Now', uid);
      } else {
        // User is signed out
        navigate('/auth');
        console.log('We DO NOT have User Now', auth);
      }
    });
  }, [navigate]);

  return (
    <div className={`${classes.page} page-content`}>
      {(t('welcome.sectionData', { returnObjects: true }) as SectionType[]).map((item) => (
        <Section key={item.title} title={item.title}>
          {item.content}
        </Section>
      ))}
      <Section title={t('welcome.creators.title')}>
        <div className={classes.creators}>
          {(
            t('welcome.creators', { returnObjects: true }) as {
              content: CreatorType[];
            }
          ).content.map((item) => (
            <Creator key={item.name} {...item} />
          ))}
        </div>
      </Section>
    </div>
  );
}
