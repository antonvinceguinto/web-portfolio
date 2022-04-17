import '../styles/globals.css';
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import ScrollObserver from '../utils/scroll-observer';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ScrollObserver>
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </ScrollObserver>
  );
}

export default MyApp;
