import classes from './style.module.scss';

interface SectionProps {
  title: string;
  children: string | React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className={classes.section} key={title}>
      <h2 className={classes.section__title}>{title}</h2>
      <div className={classes.section__content}>{children}</div>
    </section>
  );
}
