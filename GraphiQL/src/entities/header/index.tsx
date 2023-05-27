import Button from '@/shared/ui/Button';
import classes from './style.module.scss';
import icon from 'assets/svg/logo.svg';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { logout } from '@/features/authentication/firebase';
// import { useHandler } from 'features/authentication/handler';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from 'features/authentication/ValidateAccessToken/Auth';
import { auth } from 'features/authentication/firebase';
// import Icon from 'shared/ui/Icon/Icon';

export default function Header({}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLang, setActiveLang] = useState(i18n.language);
  const [user] = useAuthState(auth);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  };

  const [scrollTop, setScrollTop] = useState(0);

  const useScroll = (fn: () => void) => {
    useEffect(() => {
      window.addEventListener('scroll', fn);
      return () => window.removeEventListener('scroll', fn);
    }, [fn]);
  };

  useScroll(() => setScrollTop(window.scrollY));

  return (
    <header className={`${classes.header} container ${scrollTop && classes.header_active}`}>
      <div className={classes.set}>
        <a href="/">
          <img src={icon} alt="" className={classes.icon} />
        </a>
        <div className={classes.langs}>
          <span
            className={`${classes.langs__item} ${
              activeLang === 'en' && classes.langs__item_active
            }`}
            onClick={() => changeLanguage('en')}
          >
            {t('header.lang.en')}
          </span>
          /
          <span
            className={`${classes.langs__item} ${
              activeLang === 'ru' && classes.langs__item_active
            }`}
            onClick={() => changeLanguage('ru')}
          >
            {t('header.lang.ru')}
          </span>
        </div>
      </div>

      <nav className={classes.nav}>
        <AuthContext.Provider value={{ currentUser: user }}>
          {user ? (
            <>
              {location.pathname === '/main' ? (
                <Button type="submit" onClick={() => navigate('/')}>
                  {t('header.buttons.welcome')}
                </Button>
              ) : (
                <Button type="submit" onClick={() => navigate('/main')}>
                  {t('header.buttons.main')}
                </Button>
              )}

              <Button type="submit" onClick={logout}>
                {t('header.buttons.out')}
              </Button>
            </>
          ) : (
            <>
              <Button type="submit" onClick={() => navigate('/auth')}>
                {t('header.buttons.in')}
              </Button>
              <Button type="submit" onClick={() => navigate('/register')}>
                {t('header.buttons.up')}
              </Button>
            </>
          )}
        </AuthContext.Provider>
      </nav>
    </header>
  );
}
