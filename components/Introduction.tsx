import React from 'react';
import { Spacer } from '@nextui-org/react';
import { BusinessCard } from './BusinessCard';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BounceAnimation } from './BounceAnimation';
import cardStyles from './business-card.module.css';

export const Introduction: React.FC = () => {
  return (
    <BounceAnimation>
      <div className='lg:flex justify-around lg:mt-16 min-h-[60vh]'>
        <div className='items-start lg:text-left flex-col'>
          <div className='text-[1.6rem] lg:text-[3rem] font-bold flex-1 flex-col flex text-center md:items-start'>
            <div className='text-[#FF4A57] text-lg font-extrabold'>
              WELCOME!
            </div>
            <div>
              {`I'm`} a <span className='text-gradient'>Web Developer</span>
            </div>
            <div>
              I use <span className='text-gradient'>React, Nextjs</span>
            </div>
            <div>
              and learning <span className='text-gradient'>Solidity.</span>
            </div>
          </div>
          <Spacer y={0.9} />
          <div className='text-gray-400 text-center md:text-left'>
            Dapp / Web3 / Learning Blockchain / Learning Typescript
          </div>
        </div>
        <Spacer y={1} />
        <Spacer x={3} />
        <div>
          <div className='sm:grid lg:grid-cols-2 gap-3'>
            <div className={cardStyles.floatingTwitter}>
              <BusinessCard
                username='@antonguinto'
                url='https://twitter.com/antonguinto'
                footer='Twitter'
                icon={FaTwitter}
              />
            </div>
            <div className={cardStyles.floatingLinkedin}>
              <BusinessCard
                username='@guinto'
                url='https://www.linkedin.com/in/guinto/'
                image='/images/linkedin-me.jpg'
                buttonLabel='Connect'
                footer='Linkedin'
                icon={FaLinkedin}
              />
            </div>
            <div
              className={`${cardStyles.floatingGithub} md:col-span-2 md:mt-2`}
            >
              <BusinessCard
                username='@antonvinceguinto'
                url='https://github.com/antonvinceguinto'
                image='/images/github-me.jpg'
                footer='Github'
                icon={FaGithub}
              />
            </div>
          </div>
        </div>
      </div>
    </BounceAnimation>
  );
};
