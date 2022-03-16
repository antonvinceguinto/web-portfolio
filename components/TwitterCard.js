import React from 'react';
import Image from 'next/image';
import { Spacer, Avatar, Button } from '@nextui-org/react';

export default function BusinessCard() {
  return (
    <div className='items-center justify-center flex'>
      <div className='bg-gray-900 rounded-xl p-4 flex-col flex text-white'>
        <div className='flex'>
          <Avatar src='/images/memoji.jpg' size='md' />
          <Spacer x={0.9} />
          <div className='flex flex-col items-start'>
            <div className='font-bold'>Anton Guinto</div>
            <div className='text-xs text-gray-400'>@antonguinto</div>
          </div>
          <Spacer x={2} />
          <div className='flex justify-center items-center'>
            <Button rounded size='sm' auto>
              <a
                target='_blank'
                href='https://twitter.com/antonguinto'
                rel='noopener noreferrer'
              >
                <div className='text-xs px-2'>Follow</div>
              </a>
            </Button>
          </div>
        </div>
        <Spacer y={0.6} />
        <div className='text-xs flex pl-2 text-gray-400'>
          Web & Blockchain/Smart contract developer. He/Him
        </div>
        <div className='text-xs flex pl-2 text-gray-400'>
          <span className='font-bold mr-1'>97</span>Followers
        </div>
      </div>
    </div>
  );
}
