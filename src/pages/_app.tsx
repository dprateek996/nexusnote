import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// All animation wrappers have been removed to fix the layoutId conflict.
// This ensures that the card stack animation is the primary transition.

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;