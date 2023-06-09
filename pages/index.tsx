import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
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
      <main className='md:pt-16 text-white bg-anton-black relative w-full'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='flex flex-col w-full max-w-[85vw] mx-auto'
        >
		  <Calendly />
          <Navbar />
          <Introduction />
          <Projects />
          <Footer />
        </motion.div>
      </main>
    </>
  );
}

export default Home;
