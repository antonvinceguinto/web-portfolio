import React from 'react';
import { Spacer } from '@nextui-org/react';

export default function Navbar() {
  const navItem = (label) => {
    return <div className='cursor-pointer'>{label}</div>;
  };

  return (
    <div className='flex lg:px-72 sm:px-8 md:flex-row flex-col justify-between items-center'>
      <div className='text-2xl uppercase'>Anton Guinto</div>
      <Spacer y={1} />
      <nav className='flex gap-5 items-center justify-center uppercase font-bold'>
        <div>{navItem('Home')}</div>/<div>{navItem('Portfolio')}</div>/
        <div>{navItem('About')}</div>
      </nav>
    </div>
  );
}
