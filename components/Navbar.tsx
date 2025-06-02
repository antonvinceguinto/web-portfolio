import React, { useState } from 'react';
import { Avatar, Button, Modal, Text } from '@nextui-org/react';
import { motion } from 'framer-motion';

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
      <style jsx>{`
        :global(.nextui-modal-wrapper) {
          background-color: rgba(10, 10, 11, 0.95) !important;
          backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        :global(.nextui-modal-body) {
          background-color: transparent !important;
        }
        :global(.nextui-modal-header) {
          background-color: transparent !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        :global(.nextui-modal-footer) {
          background-color: transparent !important;
          border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
      <Modal
        closeButton
        blur
        preventClose
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
        style={{
          backgroundColor: 'rgba(10, 10, 11, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Modal.Header>
          <Text
            id='modal-title'
            size={24}
            css={{ fontWeight: '600', color: '$white' }}
          >
            Let&rsquo;s work together
          </Text>
        </Modal.Header>
        <Modal.Body className='flex-col space-y-6'>
          <motion.div
            className='card-glass p-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className='font-semibold text-primary-400 text-sm uppercase tracking-wider mb-2'>
              Email
            </div>
            <div className='text-neutral-100 text-lg'>
              antonvinceguinto@gmail.com
            </div>
          </motion.div>
          <motion.div
            className='card-glass p-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className='font-semibold text-primary-400 text-sm uppercase tracking-wider mb-2'>
              Location
            </div>
            <div className='text-neutral-100 text-lg'>
              Auckland, New Zealand
            </div>
          </motion.div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color='error' onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <motion.div
        className='fixed top-0 left-0 right-0 z-50 navbar-glass'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className='container-modern py-4'>
          <div className='flex items-center justify-between'>
            <motion.div
              className='flex items-center space-x-4'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className='relative'>
                <Avatar
                  src='/images/me-pixel.png'
                  size='lg'
                  css={{
                    border: '2px solid rgba(14, 165, 233, 0.3)',
                    boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)',
                  }}
                />
                <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-anton-black animate-pulse' />
              </div>
              <div>
                <h1 className='text-xl lg:text-2xl font-bold text-neutral-100'>
                  Anton Guinto
                </h1>
                <p className='hidden md:block text-sm text-neutral-400 font-medium'>
                  antonvinceguinto@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button type='button' onClick={handler} className='btn-primary'>
                <span className='text-base font-semibold'>About Me</span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
