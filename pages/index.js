import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Spacer } from '@nextui-org/react';
import Navbar from '../components/Navbar';
import BusinessCard from '../components/BusinessCard';

export default function Home() {
  const introduction = (
    <div className='lg:flex justify-around items-center lg:px-56 px-10'>
      <div className='items-start lg:text-left flex-col'>
        <div className='text-[1.9rem] lg:text-[3rem] font-bold flex-1 flex-col flex text-start lg:items-start'>
          <div>
            Im a <span className='text-gradient'>Software Developer</span>
          </div>
          <div>
            I use <span className='text-gradient'>React & Nextjs</span>
          </div>
          <div>
            and <span className='text-gradient'>Solidity.</span>
          </div>
        </div>
        <Spacer y={0.9} />
        <div className='text-gray-400'>
          Dapp | Web3 content | Learning Blockchain👨‍💻.
        </div>
      </div>
      <Spacer y={2} />
      <Spacer x={3} />
      <div className='sm:grid lg:grid-cols-2 gap-3'>
        <BusinessCard
          username='@antonguinto'
          url='https://twitter.com/antonguinto'
          hasFollowers={true}
          footer='Twitter'
        />
        <BusinessCard
          username='@guinto'
          url='https://www.linkedin.com/in/guinto/'
          image='/images/linkedin-me.jpg'
          footer='Linkedin'
        />
        <BusinessCard
          username='@antonvinceguinto'
          url='https://github.com/antonvinceguinto'
          image='/images/github-me.jpg'
          footer='Github'
        />
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Head>
        <title>Anton G.</title>
        <meta name='anton-guinto' content={`Anton's Portfolio`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        style={{
          backgroundImage: 'url(/images/bg-image.jpg)',
          position: 'relative',
          height: '100%',
          width: '100%',
          backgroundSize: 'contain',
        }}
      >
        <div
          className='flex flex-col pb-8 pt-16  text-white min-h-screen aboslute'
          style={{ backdropFilter: 'blur(30px)' }}
        >
          <Navbar />
          <div className='items-center justify-center flex-col flex'>
            <div className='flex-col text-center items-center justify-center mt-7 md:mt-24'>
              {introduction}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
