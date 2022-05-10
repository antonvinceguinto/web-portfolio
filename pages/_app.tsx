import '../styles/globals.css';
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { chain, createClient, WagmiProvider } from 'wagmi';
import ScrollObserver from '../utils/scroll-observer';
import NavigationProvider from '../contexts/navigation-context';

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    apiProvider.alchemy(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY),
    apiProvider.fallback(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Buy Anton a Coffee',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ScrollObserver>
      <WagmiProvider client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
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
        </RainbowKitProvider>
      </WagmiProvider>
    </ScrollObserver>
  );
}

export default MyApp;
