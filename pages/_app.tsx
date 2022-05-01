import '../styles/globals.css';
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import ScrollObserver from '../utils/scroll-observer';
import NavigationProvider from '../contexts/navigation-context';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ScrollObserver>
      <NavigationProvider>
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
      </NavigationProvider>
    </ScrollObserver>
  );
}

export default MyApp;
