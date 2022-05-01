import React, { useContext, useRef } from 'react';
import { ScrollContext } from '../utils/scroll-observer';
import s from '../styles/skills.module.css';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH,
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  const skill = (skill: string) => {
    return (
      <div className='p-5 bg-slate-50 text-[1.4rem] text-center text-black border-b-4 border-green-500 lg:mt-0 mt-3 hover:scale-110 transition-all duration-200'>
        {skill}
      </div>
    );
  };

  return (
    <div ref={refContainer} className='text-white'>
      <div className='md:min-h-screen mx-auto px-10 lg:px-32 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold'>
        <div className='leading-[1.15]'>
          <div
            className={s.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            I utilize the power of{' '}
            <span className='text-[#F8CA1C] underline'>
              <a
                target='_blank'
                href='https://reactjs.org/'
                rel='noopener noreferrer'
              >
                React JS
              </a>
            </span>{' '}
            to deliver blazing fast websites to clients and to display beautiful
            & interactive user interfaces.
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            I recently built an NFT minting website and deployed it to{' '}
            <span className='text-[#F8CA1C] underline'>
              <a
                target='_blank'
                href='https://polygon.technology/'
                rel='noopener noreferrer'
              >
                Polygon chain
              </a>
            </span>
            . I made use of NextJS, a framework on top of react to be able to
            deliver the project fast enough to the market.
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            I love using new technologies in building mobile & web apps. I
            always try to maintain clean and effecient code to minimize unusual
            bugs.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
