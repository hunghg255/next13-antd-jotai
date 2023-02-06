import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import nextI18nConfig from '../next-i18next.config';
import AppLayout from '@layout/AppLayout';
import ErrorBoundary from '@components/ErrorBoundary';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

import { Waterfall } from '@next/font/google';

const WaterfallFont = Waterfall({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-waterfall',
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ? Component.getLayout : (page: any) => page;

  return (
    <>
      <Head>
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content={'index,follow'} />
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#476055' />
        <meta name='title' content='Maby Client' />
        <meta name='description' content='Maby Client' />
        <link rel='shortcut icon' href='/static/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no'
        />
      </Head>

      <ErrorBoundary>
        <AppLayout WaterfallFont={WaterfallFont}>
          {getLayout(<Component {...pageProps} />)}
        </AppLayout>
      </ErrorBoundary>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18nConfig);
