import type { AppProps } from 'next/app'
import ReduxWrapper from '../src/store';

import "../src/assets/global-style.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default ReduxWrapper.withRedux(MyApp)
