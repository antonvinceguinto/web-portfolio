import { BounceAnimation } from './BounceAnimation';
import styles from '../styles/skills.module.css';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

export const Skills: React.FC = () => {
  const skill = (skill: string) => {
    return (
      <div className='p-5 bg-slate-50 text-[1.4rem] text-center text-black border-b-4 border-green-500 lg:mt-0 mt-3'>
        {skill}
      </div>
    );
  };

  return (
    <>
      <BounceAnimation>
        <div className='md:min-h-[40vh] items-start justify-between'>
          <div className='flex text-[1.6rem] lg:text-[3rem] font-bold'>
            Skills
          </div>
          <div
            className='mt-8 items-center justify-center sm:grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 text-[1.6rem] lg:text-[3rem] font-bold gap-8'
          >
            {skill('React')}
            {skill('Next JS')}
            {skill('Solidity')}
            {skill('Version Control')}
            {skill('Tailwind CSS')}
            {skill('Typescript')}
            {skill('Flutter')}
            {skill('API Integration')}
          </div>
        </div>
      </BounceAnimation>
    </>
  );
};
