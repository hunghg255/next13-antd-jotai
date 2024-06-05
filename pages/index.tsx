import { ReactElement } from 'react';

import { Breadcrumb, DatePicker, Steps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Home from '@components/Home';
import MainLayout from '@layout/MainLayout';

const HomePage = () => {
  return (
    <div>
      <Home />
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <a href=''>Application Center </a>,
          },
          {
            title: <a href=''>Application List</a>,
          },
          {
            title: 'An Application',
          },
        ]}
      />
      <Steps
        current={1}
        items={[
          {
            title: 'Finished',
            description: 'asdsa',
          },
          {
            title: 'In Progress',
            description: 'asdsa',
            subTitle: 'Left 00:00:08',
          },
          {
            title: 'Waiting',
            description: 'asdsa',
          },
        ]}
      />
      <DatePicker />

      <Image src='/images/demo.jpg' width={500} height={800} alt='' />

      <Link href={'/ssr/1'}>Page SSR</Link>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}

export default HomePage;
