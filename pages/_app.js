import './styles.css'

import { Toaster } from 'react-hot-toast';
import { Auth0Provider } from '@auth0/auth0-react'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'

export default function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.browser && window.location.origin}
    >
      <Head>
        <title>Blynd: Food Serendipity</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      {/* <div className="antialiased max-w-xl mx-auto px-4">
        <Header />
        <main> */}
          <Component {...pageProps} />
        {/* </main>
        <Footer />
      </div> */}

      <Toaster />
    </Auth0Provider>
  )
}
