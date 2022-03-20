import { useState } from 'react';
import { Avatar, Button, Spacer } from '@nextui-org/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export const Navbar: React.FC = () => {
  const [isContactModalOpen, setisContactModalOpen] = useState<boolean>(false);

  return (
    <nav className='flex items-center sm:justify-center md:justify-between uppercase font-bold '>
      <div className='flex items-center justify-start'>
        <Avatar src='/images/me-pixel.png' size='lg' />
        <div className='items-center justify-center'>
          <div className='text-2xl opacity-0 md:opacity-100 md:ml-8'>
            Anton Guinto
          </div>
          <div className='text-sm lowercase font-normal text-gray-500 opacity-0 md:opacity-100 md:ml-8'>
            antonvinceguinto@gmail.com
          </div>
        </div>
      </div>
      <Button color='gradient' auto rounded>
        Contact Me
      </Button>
    </nav>
  );
};
