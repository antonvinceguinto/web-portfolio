import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Introduction } from '../components/Introduction';
import { motion } from 'framer-motion';
import { Projects } from '../components/Projects';
import { LetsWorkTogether } from './../components/LetsWorkTogether';
import { Spacer } from '@nextui-org/react';
import { BounceAnimation } from '../components/BounceAnimation';
import { Skills } from '../components/Skills';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Anton Guinto</title>
        <meta name='anton-guinto' content={`Anton's Portfolio`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='md:pt-16 text-white min-h-screen bg-gray-900'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='pt-7 flex justify-center items-center flex-col'
        >
          <div className='max-w-[75vw]'>
            <Navbar />
            <div className='flex flex-col pb-16 md:mt-24'>
              <section className='mt-10 md:mt-0'>
                <Introduction />
              </section>
              <Spacer y={4} />
              <section>
                <Skills />
              </section>
              <Spacer y={4} />
              <section>
                <Projects />
              </section>
              <Spacer y={9} />
              <footer className='text-center text-gray-400'>
                Anton Vince Guinto © 2022
              </footer>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
