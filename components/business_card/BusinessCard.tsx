import Image from 'next/image';
import { Spacer, Avatar, Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { JsxElement } from 'typescript';
import { IconType } from 'react-icons';

interface CardProps {
  username: string;
  url: string;
  footer: string;
  image?: string;
  buttonLabel?: string;
  icon: IconType;
}

export const BusinessCard: React.FC<CardProps> = ({
  username = '@antonguinto',
  url,
  footer = 'Visit me',
  image = '/images/memoji.jpg',
  buttonLabel = 'Follow',
  icon,
}) => {
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
      className='items-center text-center justify-center flex mt-1 rounded-xl cursor-pointer'
    >
      <div
        className={`bg-white rounded-xl p-4 flex-col flex text-left text-white`}
      >
        <div className='flex'>
          <Avatar
            src={image}
            size='md'
            style={{ zIndex: '1', border: '0px' }}
            bordered={false}
          />
          <Spacer x={0.9} />
          <div className='flex flex-col items-start'>
            <div className='font-bold text-gray-600'>Anton Guinto</div>
            <div className='text-xs text-gray-400'>{username}</div>
          </div>
          <Spacer x={2} />
          <div className='flex justify-center items-center'>
            <a target='_blank' href={url} rel='noopener noreferrer'>
              <Button rounded size='sm' auto>
                <div
                  className={`${
                    buttonLabel === 'Connect' ? 'text-[0.7rem]' : 'text-xs'
                  } px-2`}
                >
                  {buttonLabel}
                </div>
              </Button>
            </a>
          </div>
        </div>
        <Spacer y={0.6} />
        <div className='text-xs pl-2 text-gray-500'>
          Web developer. Learning Web3 and Blockchain
          <div>development.</div>
        </div>
        <Spacer y={0.3} />
        {footer && (
          <div className='flex justify-between items-center'>
            <div className='text-xs font-bold pl-2 text-gray-600'>{footer}</div>
            {icon}
          </div>
        )}
      </div>
    </motion.div>
  );
};
