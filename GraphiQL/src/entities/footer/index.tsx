import { AiFillGithub } from 'react-icons/ai';
import school from '../../assets/svg/logo-rs.svg';
import classes from './style.module.scss';
import { creatorsData } from 'data';

export default function Footer({}) {
  return (
    <footer className={`${classes.footer} container`}>
      <div className={classes.footer__git}>
        {creatorsData.map((item) => (
          <a key={item.git} href={`https://github.com/${item.git}`}>
            <AiFillGithub className={classes.footer__gititem} />
          </a>
        ))}
      </div>
      <div className={classes.footer__year}>2023</div>
      <a href="https://rs.school/">
        <img src={school} alt="" className={classes.footer__rslogo} />
      </a>
    </footer>
  );
}
