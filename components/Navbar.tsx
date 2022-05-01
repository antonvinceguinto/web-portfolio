import React, { useState } from 'react';
import { Avatar, Button, Modal, Text } from '@nextui-org/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavigationContext } from '../contexts/navigation-context';
import { TiThMenu } from 'react-icons/ti';
import { VscChromeClose } from 'react-icons/vsc';

function NavItem({ label }: { label: string }) {
  return (
    <div className='p-4 cursor-pointer bg-gray-600 bg-opacity-30 text-center'>
      {label}
    </div>
  );
}

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const { isBurgerOpen, setIsBurgerOpen } = React.useContext(NavigationContext);

  return (
    <>
      <Modal
        closeButton
        blur
        preventClose
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id='modal-title' size={20}>
            Let&rsquo;s work together
          </Text>
        </Modal.Header>
        <Modal.Body className='flex-col'>
          <div className='flex-col'>
            <div className='font-bold'>Email</div>
            <div>antonvinceguinto@gmail.com</div>
          </div>
          <div className='flex-col'>
            <div className='font-bold'>Location</div>
            <div>Auckland, New Zealand</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color='error' onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='flex min-w-full mt-8 md:mt-0'>
        <div className='flex flex-col w-full items-start justify-between md:justify-center font-bold'>
          <div className='flex w-full justify-between'>
            <div className='flex items-center'>
              <Avatar src='/images/me-pixel.png' size='lg' />
              <div className='items-center justify-center'>
                <div className='text-xl md:text-2xl ml-4 md:ml-8'>
                  Anton Guinto
                </div>
                <div className='text-xs md:text-md lowercase text-gray-500 ml-4 md:ml-8'>
                  antonvinceguinto@gmail.com
                </div>
              </div>
            </div>
            {/* <button
              className='py-2 px-3 flex items-center'
              onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            >
              {isBurgerOpen ? (
                <VscChromeClose size={30} />
              ) : (
                <TiThMenu size={30} />
              )}
            </button> */}
          </div>
          {/* <nav
            className={`${
              isBurgerOpen ? 'visible' : 'hidden'
            } w-full mt-5 transition-all duration-150`}
          >
            <ul className='flex flex-col gap-1'>
              <NavItem label='Home' />
              <NavItem label='About' />
              <NavItem label='Projects' />
            </ul>
          </nav> */}
        </div>
      </div>
    </>
  );
};
