// ** Next
import type { AppProps } from 'next/app';
import Head from 'next/head';

// ** Global Styles
import '@/styles/globals.css';

// ** Fonts
import { Poppins } from 'next/font/google';
import { HeroesProvider } from '@/context/HeroesContext';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Head>
        <title>Find the Hero</title>
        <meta
          name="description"
          content="Encontre todos os heróis da Marvel e conheça os detalhes sobre eles"
        />
        <meta name="keywords" content="" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <HeroesProvider>
        <Component {...pageProps} />
      </HeroesProvider>
    </main>
  );
}
