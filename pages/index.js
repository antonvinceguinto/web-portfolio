import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Spacer } from '@nextui-org/react';
import Navbar from '../components/Navbar';
import TwitterCard from '../components/TwitterCard';

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
          I develop websites and decentralized applications.
        </div>
      </div>
      <Spacer y={2} />
      <Spacer x={3} />
      <div className='sm:grid lg:grid-cols-2 gap-3'>
        <TwitterCard />
        <TwitterCard />
        <TwitterCard />
        <TwitterCard />
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
      <main className='flex flex-col pb-8 pt-16 bg-black text-white min-h-screen'>
        <Navbar />
        <div className='items-center justify-center flex-col flex'>
          <div className='flex-col text-center items-center justify-center mt-7 md:mt-24'>
            {introduction}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
