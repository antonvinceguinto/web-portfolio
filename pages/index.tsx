import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Introduction } from '../components/Introduction';
import { motion } from 'framer-motion';
import { Projects } from '../components/Projects';
import { Spacer } from '@nextui-org/react';
import Skills from '../components/Skills';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Anton Guinto</title>
        <meta name='Anton Guinto Portfolio' content={`Anton Guinto's Portfolio. I build web app with react and mobile apps with Flutter.`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='md:pt-16 text-white min-h-screen bg-[#121212] '>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='pt-7 flex justify-center items-center flex-col'
        >
          <div className='max-w-[80vw] lg:max-w-[90vw]'>
            <div className='flex justify-center items-center'>
              <Navbar />
            </div>
            <section className='pt-10'>
              <Introduction />
            </section>
          </div>
          <Spacer y={4} />
          <Skills />
          <Spacer y={3} />
          <div className='max-w-[80vw] lg:max-w-[90vw]'>
            <section>
              <Projects />
            </section>
            <Spacer y={4} />
            <footer className='text-center text-gray-400'>
              Anton Vince Guinto © 2022
            </footer>
            <Spacer y={2} />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
