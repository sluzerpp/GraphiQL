import classes from './style.module.scss';

interface CreatorProps {
  name: string;
  git: string;
  responses: string[];
}

export default function Creator({ name, git, responses }: CreatorProps) {
  return (
    <a href={`https://github.com/${git}`} className={classes.creator}>
      <div className={classes.creator__title}>{name}</div>
      <ul className={classes.creator__list}>
        {responses.map((item) => (
          <li key={item} className={classes.creator__item}>
            {item}
          </li>
        ))}
      </ul>
    </a>
  );
}
