import React from 'react';
import { Spacer } from '@nextui-org/react';
import BusinessCard from './BusinessCard';

export default function Introduction() {
  return (
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
          buttonLabel='Connect'
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
}
