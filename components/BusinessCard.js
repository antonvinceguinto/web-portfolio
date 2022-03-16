import React from 'react';
import Image from 'next/image';
import { Spacer, Avatar, Button } from '@nextui-org/react';

export default function BusinessCard({
  username = '@antonguinto',
  url,
  footer = 'Visit me',
  image = '/images/memoji.jpg',
}) {
  return (
    <div className='items-center text-center justify-center flex mt-1'>
      <div className='bg-gray-900 rounded-xl p-4 flex-col flex text-left text-white'>
        <div className='flex'>
          <Avatar src={image} size='md' />
          <Spacer x={0.9} />
          <div className='flex flex-col items-start'>
            <div className='font-bold'>Anton Guinto</div>
            <div className='text-xs text-gray-400'>{username}</div>
          </div>
          <Spacer x={2} />
          <div className='flex justify-center items-center'>
            <Button rounded size='sm' auto>
              <a target='_blank' href={url} rel='noopener noreferrer'>
                <div className='text-xs px-2'>Follow</div>
              </a>
            </Button>
          </div>
        </div>
        <Spacer y={0.6} />
        <div className='text-xs pl-2 text-gray-400'>
          Web developer. Learning Web3 development.
          <div>I also do Flutter  development.</div>
        </div>
        <Spacer y={0.3} />
        {footer && (
          <div className='text-xs font-bold pl-2 text-gray-400'>{footer}</div>
        )}
      </div>
    </div>
  );
}
