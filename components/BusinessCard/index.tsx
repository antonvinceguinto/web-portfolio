import React from 'react';
import { Spacer, Avatar, Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

interface CardProps {
  username: string;
  description: string;
  url: string;
  footer: string;
  image?: string;
  buttonLabel?: string;
}

export default function BusinessCard({
  username = '@antonguinto',
  description = 'Testing',
  url = '',
  footer = '',
  image = '/images/memoji.jpg',
  buttonLabel = 'Follow',
}: CardProps) {
  return (
    <motion.div
      whileHover={{
        position: 'relative',
        zIndex: 2,
        scale: [1, 1.1, 1.2],
        rotate: [0, 5, -5, 0],
        transition: {
          duration: 0.2,
        },
      }}
    >
      <div className='items-center text-center justify-center flex mt-1 rounded-xl'>
        <div className='bg-white rounded-xl p-4 flex-col flex text-left w-full lg:w-[20rem]'>
          <div className='flex'>
            <Avatar
              src={image}
              size='md'
              style={{ zIndex: '1', border: '0px' }}
              bordered={false}
            />
            <Spacer x={0.9} />
            <div className='flex justify-between w-full'>
              <div className='flex flex-col items-start'>
                <div className='font-bold text-gray-600'>Anton G.</div>
                <div className='text-xs text-gray-400'>{username}</div>
              </div>
              <div className='flex justify-center items-center'>
                <a target='_blank' href={url} rel='noopener noreferrer'>
                  <Button rounded size='sm' auto>
                    {buttonLabel}
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <Spacer y={0.6} />
          <div className='text-xs pl-2 text-gray-500'>{description}</div>
          <Spacer y={0.3} />
          {footer && (
            <div className='flex justify-between items-center'>
              <div className='text-xs font-black pl-2 text-gray-600'>
                {footer}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
