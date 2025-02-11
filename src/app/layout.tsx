import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <base href={process.env.NODE_ENV === 'production' ? '/medxinnov/' : '/'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}