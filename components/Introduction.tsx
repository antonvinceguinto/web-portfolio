import React from 'react';
import Link from 'next/link';
import { Spacer } from '@nextui-org/react';
import cardStyles from './BusinessCard/business-card.module.css';
import BusinessCard from './BusinessCard';

export default function Introduction() {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center min-h-[90vh] mt-36 md:mt-0'>
      <div className='items-start lg:text-left flex-col'>
        <div className='gap-2 md:gap-5 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-sans font-black flex-1 flex-col flex text-center md:text-left md:items-start'>
          <div>
            <div className='text-[#FF4A57] text-lg md:text-xl mb-2 font-inconsolata'>
              WELCOME!
            </div>
            {`I'm`} a <span className='text-gradient'>Front-end Engineer.</span>
          </div>
          <div>
            I build <span className='text-gradient'>Mobile Apps & Websites</span>
          </div>
          <div>
            for <span className='text-gradient'>small</span> Businesses.
          </div>
        </div>
        <Spacer y={0.9} />
        <div className='text-gray-400 text-center md:text-left'>
          I offer services for building websites and mobile apps for small businesses.
        </div>
        <div className='cursor-pointer mt-10'>
          <Link href='/blogs' passHref>
            <h1 className='py-2 px-5 bg-green-600 border rounded-lg text-center max-w-lg'>
              I write Blogs (Under Improvement) 🏗️
            </h1>
          </Link>
        </div>
      </div>

      <div className='mt-10 md:ml-28'>
        <div className='grid lg:grid xl:grid-cols-2 gap-3'>
          <div className={cardStyles.floatingTwitter}>
            <BusinessCard
              username='@antonguinto'
              description='I tweet about web2+1 development. But mostly react & javascript.'
              url='https://twitter.com/antonguinto'
              footer='Twitter'
            />
          </div>
          <div className={cardStyles.floatingLinkedin}>
            <BusinessCard
              username='@guinto'
              description='Let`s connect! We might build the next unicorn startup🦄.'
              url='https://www.linkedin.com/in/guinto/'
              image='/images/linkedin-me.jpg'
              buttonLabel='Connect'
              footer='Linkedin'
            />
          </div>
          <div className={`${cardStyles.floatingGithub} xl:col-span-2 lg:mt-2`}>
            <BusinessCard
              username='@antonvinceguinto'
              description='Check out what projects I&rsquo;m working on 👨‍💻. I also have some quite boring open source projects.'
              url='https://github.com/antonvinceguinto'
              image='/images/github-me.jpg'
              footer='Github'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
