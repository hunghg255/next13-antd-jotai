import { useTranslation } from 'next-i18next';

import { useTest } from '@hooks/test';

import styles from './index.module.scss';

function Home() {
  useTest();
  const { t } = useTranslation('home');

  return <h1 className={styles.h1}>{t('home.title')}</h1>;
}

export default Home;
