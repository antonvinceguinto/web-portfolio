import React, { useState } from 'react';
import { Spacer, Button } from '@nextui-org/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);

  const [isContactModalOpen, setisContactModalOpen] = useState<boolean>(false)

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
   
      <Button color='gradient' auto rounded>
        Contact Me
    </Button>
    </nav>
    // </div>
  );
};
