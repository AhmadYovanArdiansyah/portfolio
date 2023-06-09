import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Monda&family=Noticia+Text&display=swap" rel="stylesheet" />
      </Head>
      <body className=' overflow-hidden relative bg-[rgb(20,20,20)]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
