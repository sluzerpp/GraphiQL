import { creatorsData } from 'data';
import Creator from 'entities/creator';
import classes from './style.module.scss';
import Section from 'entities/section';

const sectionData = [
  {
    title: 'About GraphQL',
    content:
      'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.',
  },
  {
    title: 'About RS School',
    content:
      'RS School is free-of-charge and community-based education program conducted by The Rolling Scopes developer community since 2013. Everyone can study at RS School, regardless of age, professional employment, or place of residence. The mentors and trainers of our school are front-end and javascript developers from different companies and countries.',
  },
];

export default function Welcome() {
  return (
    <div className={`${classes.page} page-content`}>
      {sectionData.map((item) => (
        <Section key={item.title} title={item.title}>
          {item.content}
        </Section>
      ))}
      <Section title="Creators">
        <div className={classes.creators}>
          {creatorsData.map((item) => (
            <Creator key={item.name} {...item} />
          ))}
        </div>
      </Section>
    </div>
  );
}
