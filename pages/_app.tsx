import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from '../app/Components/Layaut/Layout'
import Toastr from '../app/Components/ui/Toastr'
import { persistor, store } from '../app/store/store'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  
  return <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Head>
        <title>Youtube-clone</title>
        <meta name='description' content='YouTube-clone' />
        <link rel='icon' href='/Dakirby309-Simply-Styled-YouTube.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <NextNProgress color={'red'} />
        <Toastr />
      </Layout>
    </PersistGate>
  </Provider>
}
