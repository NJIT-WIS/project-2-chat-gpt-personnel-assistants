import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
     <script async src={`https://www.googletagmanager.com/gtag/js?id=${"G-0NXCE038ST"}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${"G-0NXCE038ST"}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </body>
    </Html>
  )
}
