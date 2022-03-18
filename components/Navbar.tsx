import React, { useState } from 'react';
import { Spacer } from '@nextui-org/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);

  const navItem = (label: String) => {
    return (
      <li className='mx-6 py-3 md:mx-4 md:my-0 cursor-pointer'>
        <a>{label}</a>
      </li>
    );
  };

  const menuHandler = () => {
    setisMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <nav className='md:flex items-center md:justify-between uppercase font-bold'>
      <div className='flex items-center justify-between'>
        <div className='text-2xl uppercase'>Anton Guinto</div>
        <div className='md:hidden block cursor-pointer'>
          {isMenuOpen ? (
            <AiOutlineClose size={24} onClick={menuHandler} />
          ) : (
            <GiHamburgerMenu size={24} onClick={menuHandler} />
          )}
        </div>
      </div>
      <ul
        className={`md:flex md:items-center md:gap-2 lg:gap-9 bg-gray-800 bg-opacity-80 bg-clip-padding mt-8 md:mt-0 
              left-0 md:left-0 md:bg-transparent md:w-auto w-full 
              md:static absolute z-[2] md:z-auto py-3 md:py-0
              md:opacity-100 ${
                isMenuOpen ? 'opacity-100 top-[70px]' : 'opacity-0 top-[-400px]'
              } transition-all ease-in duration-200`}
        style={{ backdropFilter: 'blur(5px) contrast(100%)' }}
      >
        {navItem('Home')}
        {navItem('Projects')}
        {navItem('Contact')}
      </ul>
    </nav>
    // </div>
  );
};
