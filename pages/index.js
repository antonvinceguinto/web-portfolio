import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Spacer } from '@nextui-org/react';
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Anton G.</title>
        <meta name='anton-guinto' content={`Anton's Portfolio`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className='bg-gray-900'
        // style={{
        //   backgroundImage: 'url(/images/bg-image.jpg)',
        //   position: 'relative',
        //   height: '100%',
        //   width: '100%',
        //   backgroundSize: 'contain',
        // }}
      >
        <div
          className='flex flex-col pb-8 pt-16  text-white min-h-screen aboslute'
          style={{ backdropFilter: 'blur(30px)' }}
        >
          <Navbar />
          <div className='items-center justify-center flex-col flex'>
            <div className='flex-col text-center items-center justify-center mt-7 md:mt-24'>
              <Introduction/>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
