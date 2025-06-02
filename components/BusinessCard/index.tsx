import React from 'react';
import { Avatar } from '@nextui-org/react';
import { motion } from 'framer-motion';

interface CardProps {
  username: string;
  description: string;
  footer: string;
  image?: string;
}

export default function BusinessCard({
  username = '@antonguinto',
  description = 'Testing',
  footer = '',
  image = '/images/memoji.jpg',
}: CardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      }}
      className='group'
    >
      <div className='card-glass p-6 h-full transition-all duration-300 group-hover:shadow-glow'>
        <div className='flex items-start justify-between mb-4'>
          <div className='flex items-center space-x-4'>
            <div className='relative'>
              <Avatar
                src={image}
                size='lg'
                css={{
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              />
              <div className='absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-anton-black' />
            </div>
            <div>
              <h3 className='font-bold text-neutral-100 text-lg'>Anton G.</h3>
              <p className='text-sm text-neutral-400 font-medium'>{username}</p>
            </div>
          </div>
        </div>

        <p className='text-neutral-300 text-sm leading-relaxed mb-4'>
          {description}
        </p>

        {footer && (
          <div className='flex items-center justify-between pt-4 border-t border-neutral-700/50'>
            <span className='text-xs font-semibold text-primary-400 uppercase tracking-wider'>
              {footer}
            </span>
            <div className='flex space-x-1'>
              <div className='w-2 h-2 bg-primary-500 rounded-full opacity-60' />
              <div className='w-2 h-2 bg-secondary-500 rounded-full opacity-60' />
              <div className='w-2 h-2 bg-accent-500 rounded-full opacity-60' />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
