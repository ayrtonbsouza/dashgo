import { AppProps as Props } from 'next/app';

const MyApp: React.VFC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
