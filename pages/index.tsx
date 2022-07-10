import Head from 'next/head';
import { Spacer } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Head>
        <title>Anton Guinto</title>
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
      <main className='md:pt-16 text-white bg-[#121212] relative'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='flex justify-center items-center flex-col'
        >
          <div className='max-w-[80vw] lg:max-w-[90vw]'>
            <div className='flex justify-center items-center'>
              <Navbar />
            </div>
            <Introduction />
          </div>
          <Spacer y={4} />
          <Skills />
          <Spacer y={3} />
          <div className='max-w-[80vw] lg:max-w-[90vw]'>
            <section>
              <Projects />
            </section>
          </div>
          <Footer />
        </motion.div>
      </main>
    </>
  );
}

export default Home;
