import React, { useState } from 'react';
import { Avatar, Button, Modal, Text } from '@nextui-org/react';

// function NavItem({ label }: { label: string }) {
//   return (
//     <div className='p-4 cursor-pointer bg-gray-600 bg-opacity-30 text-center'>
//       {label}
//     </div>
//   );
// }

export default function Navbar() {
  const [visible, setVisible] = useState<boolean>(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  //   const { isBurgerOpen, setIsBurgerOpen } = React.useContext(NavigationContext);

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
      <div className='flex w-full fixed top-0 left-0 right-0 z-50 items-center justify-center bg-anton-black bg-opacity-70 glass-effect'>
        <div className='flex flex-col w-full max-w-[80vw] lg:max-w-[90vw]
		 md:mt-0 md:px-10 py-5
		items-start justify-between md:justify-center font-bold'>
          <div className='flex w-full justify-between'>
            <div className='flex items-center'>
              <Avatar src='/images/me-pixel.png' size='lg' />
              <div className='items-center justify-center'>
                <div className='text-xl md:text-xl ml-4 md:ml-8'>
                  Anton Guinto
                </div>
                <div className='hidden md:block text-md md:text-md lowercase text-gray-500 ml-4 md:ml-8'>
                  antonvinceguinto@gmail.com
                </div>
              </div>
            </div>
            <Button color='gradient' auto onClick={handler}>
              <h5 className='text-lg'>About Me</h5>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
