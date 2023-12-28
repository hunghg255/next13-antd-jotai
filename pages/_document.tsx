import { StyleProvider, createCache } from '@ant-design/cssinjs';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

import { doExtraStyle } from '../scripts/genAntdCss';

const MyDocument = () => (
  <Html>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  let fileName = '';
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  // 1.1 extract style which had been used
  fileName = doExtraStyle({
    cache,
  });

  if (fileName) {
    // @ts-ignore
    initialProps.styles.unshift(<link rel='stylesheet' href={`/${fileName}`} />);
  }

  return initialProps;
};

export default MyDocument;
