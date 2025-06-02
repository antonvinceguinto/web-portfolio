import Head from 'next/head';
import { motion } from 'framer-motion';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import LetsWorkTogether from '../components/LetsWorkTogether';
import Footer from '../components/Footer';
import Calendly from '../components/Calendly';

function Home() {
  return (
    <>
      <Head>
        <title>Anton Guinto (Tonbeans)</title>
        <meta
          name='Anton Guinto Portfolio'
          content={`Anton Guinto's Portfolio. I build web apps with react & nextjs and mobile apps with Flutter.`}
        />
        <meta name='title' content='Anton Guinto Portfolio' />
        <meta name='author' content='Anton Guinto' />
        <meta
          name='description'
          content={`Anton Guinto's Portfolio. I build web apps with react & nextjs and mobile apps with Flutter.`}
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='http://antonguinto.com' />
        <meta property='og:title' content='Anton Guinto Portfolio' />
        <meta
          property='og:description'
          content={`Anton Guinto's Portfolio. I build web apps with react & nextjs and mobile apps with Flutter.`}
        />
        <meta
          property='og:image'
          content='https://i.ibb.co/gr25BtL/antonguinto.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='http://antonguinto.com' />
        <meta property='twitter:title' content='Anton Guinto Portfolio' />
        <meta
          property='twitter:description'
          content={`Anton Guinto's Portfolio. I build web apps with react & nextjs and mobile apps with Flutter.`}
        />
        <meta
          property='twitter:image'
          content='https://i.ibb.co/gr25BtL/antonguinto.png'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='relative min-h-screen bg-anton-black'>
        {/* Background gradient overlay */}
        <div className='fixed inset-0 bg-gradient-to-br from-primary-900/20 via-anton-black to-secondary-900/20 pointer-events-none' />

        {/* Animated background elements */}
        <div className='fixed inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow' />
          <div
            className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-glow'
            style={{ animationDelay: '1s' }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='relative z-10'
        >
          <Calendly />
          {/* <Navbar /> */}

          <div className='container-modern'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Introduction />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Projects />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <LetsWorkTogether />
            </motion.div>
          </div>

          <Footer />
        </motion.div>
      </main>
    </>
  );
}

export default Home;
