import { useTranslation } from 'next-i18next';
import styles from './index.module.scss';

function Home() {
  const { t } = useTranslation('home');

  return <h1 className={styles.h1}>{t('home.title')}</h1>;
}

export default Home;
