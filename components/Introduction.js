import React from 'react';
import { Spacer } from '@nextui-org/react';
import BusinessCard from './BusinessCard';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BounceAnimation from './BounceAnimation';
import cardStyles from './business-card.module.css';

export default function Introduction() {
  return (
    <BounceAnimation>
      <div className='lg:flex justify-around items-center lg:px-56 lg:mt-24 px-10'>
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
            Dapp | Web3 content | Learning Blockchain👨‍💻
          </div>
        </div>
        <Spacer y={2} />
        <Spacer x={3} />
        <div className='sm:grid lg:grid-cols-2 gap-3'>
          <div className={cardStyles.floatingTwitter}>
            <BusinessCard
              username='@antonguinto'
              url='https://twitter.com/antonguinto'
              hasFollowers={true}
              footer='Twitter'
              icon={<FaTwitter />}
            />
          </div>
          <div className={cardStyles.floatingLinkedin}>
            <BusinessCard
              username='@guinto'
              url='https://www.linkedin.com/in/guinto/'
              image='/images/linkedin-me.jpg'
              buttonLabel='Connect'
              footer='Linkedin'
              icon={<FaLinkedin />}
            />
          </div>
          <div className={`${cardStyles.floatingGithub} col-span-2 mt-2`}>
            <BusinessCard
              username='@antonvinceguinto'
              url='https://github.com/antonvinceguinto'
              image='/images/github-me.jpg'
              footer='Github'
              icon={<FaGithub />}
            />
          </div>
        </div>
      </div>
    </BounceAnimation>
  );
}
