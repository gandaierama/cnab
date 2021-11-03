import 'semantic-ui-css/semantic.min.css'

import Head from 'next/head'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
    </>
  )
}