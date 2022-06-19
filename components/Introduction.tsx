import React from 'react';
import Link from 'next/link';
import { Spacer } from '@nextui-org/react';
import cardStyles from './business_card/business-card.module.css';
import BusinessCard from './business_card/BusinessCard';

export default function Introduction() {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center min-h-[90vh] md:min-h-[60vh] pt-10'>
      <div className='items-start lg:text-left flex-col'>
        <div className='gap-2 md:gap-5 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-sans font-black flex-1 flex-col flex text-center md:text-left md:items-start'>
          <div>
            <div className='text-[#FF4A57] text-lg md:text-xl mb-2 font-inconsolata'>
              WELCOME!
            </div>
            {`I'm`} a <span className='text-gradient'>Front-end Engineer.</span>
          </div>
          <div>
            I use <span className='text-gradient'>React JS.</span>
          </div>
          <div>
            Learning <span className='text-gradient'>Solidity.</span>
          </div>
        </div>
        <Spacer y={0.9} />
        <div className='text-gray-400 text-center md:text-left'>
          Web2+1 / Learning Blockchain / ❤️&rsquo;s Typescript / Flutter
        </div>
        <div className='cursor-pointer'>
          <Link href='/blogs' passHref>
            <h1 className='mt-10 py-2 px-5 border border-green-100 bg-green-500 w-full rounded-lg text-center'>
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
