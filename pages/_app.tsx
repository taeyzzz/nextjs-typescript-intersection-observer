import type { AppProps } from 'next/app'

import "../src/assets/global-style.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
