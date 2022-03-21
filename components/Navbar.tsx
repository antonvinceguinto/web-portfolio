import { useState } from 'react';
import { Avatar, Button, Modal, Text } from '@nextui-org/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export const Navbar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <nav className='flex items-center sm:justify-center md:justify-between uppercase font-bold '>
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
      <Button color='gradient' auto rounded onClick={handler}>
        Contact Me
      </Button>
    </nav>
  );
};
