import EditorWidget from 'widgets/EditorWidget';
import styles from './index.module.scss';

export default function MainPage() {
  return (
    <div className={styles.main}>
      <div className="doc"></div>
      <EditorWidget></EditorWidget>
    </div>
  );
}
