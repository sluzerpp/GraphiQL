import classes from './style.module.scss';
import Section from 'entities/section';
import { useTranslation } from 'react-i18next';
import { CreatorType, SectionType } from 'type';
import Creator from '@/entities/creator';
export default function Welcome() {
  const { t } = useTranslation();

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
