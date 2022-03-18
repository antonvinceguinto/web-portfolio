import { useEffect } from 'react';
import { BounceAnimation } from './BounceAnimation';

export const LetsWorkTogether: React.FC = () => {
  const item = (label: string, value: string) => {
    return (
      <div className='flex flex-col'>
        <div className='text-2xl font-bold'>{label}</div>
        <div>{value}</div>
      </div>
    );
  };

  return (
    <BounceAnimation>
      <div className='flex flex-col min-h-[50vh] items-start justify-end pb-5'>
        <div className='text-[1.6rem] lg:text-[3rem] font-bold'>{`Let's work together`}</div>
        <div className='w-full bg-[#1F2937] flex text-center py-8 items-center justify-around mt-8 rounded-xl'>
          {item('Email', 'antonvinceguinto@gmail.com')}
        </div>
      </div>
    </BounceAnimation>
  );
};
