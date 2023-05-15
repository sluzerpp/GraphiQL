import Button from 'shared/ui/Button/Button';
import classes from './style.module.scss';
import icon from 'assets/svg/logo.svg';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
import { useEffect, useState } from 'react';

export default function Header({}) {
  const { t } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);

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
        <Button>{t('header.buttons.in')}</Button>
        <Button>{t('header.buttons.up')}</Button>
      </nav>
    </header>
  );
}
