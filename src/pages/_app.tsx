import { AppProps as Props } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';

const MyApp: React.VFC<Props> = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <SidebarDrawerProvider>
      <Component {...pageProps} />
    </SidebarDrawerProvider>
  </ChakraProvider>
);

export default MyApp;
