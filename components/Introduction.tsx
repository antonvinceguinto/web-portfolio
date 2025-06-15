import React from 'react';
import { motion } from 'framer-motion';
import cardStyles from './BusinessCard/business-card.module.css';
import BusinessCard from './BusinessCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Introduction() {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row lg:items-center justify-center pt-24 lg:pt-0 pb-20'>
      <motion.div
        className='flex-1 lg:pr-16'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div variants={itemVariants}>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 mb-8'>
            <div className='w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse' />
            <span className='text-primary-400 font-medium text-sm uppercase tracking-wider'>
              Welcome
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className='space-y-6 mb-12'>
          <h1 className='hero-text'>
            <span className='block text-neutral-100'>I&apos;m a</span>
            <span className='block text-gradient-primary'>
              Software Developer.
            </span>
          </h1>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 leading-tight'>
            I build{' '}
            <span className='text-gradient-accent'>Mobile Apps, Websites.</span>
          </h2>

          <h3 className='sm:text-xl lg:text-2xl font-bold text-neutral-100'>
            ...and <span className='text-gradient'>Mobile Games.</span>
          </h3>
        </motion.div>

        {/* Divider */}
        {/* <div className='flex justify-center px-6 pb-10'>
          <div
            className='w-24 h-px bg-gradient-to-r from-transparent
		 via-gray-400 to-transparent'
          />
        </div> */}
      </motion.div>

      <motion.div
        className='flex-1 mt-16 lg:mt-0 lg:pl-16'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* <div className='grid lg:grid xl:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0'> */}
        <div className='space-y-16'>
          <motion.div
            className={cardStyles.floatingTwitter}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <BusinessCard
              username='@antonguinto'
              description='Kia ora! I am a software developer and designer based in New Zealand. 
			  I specialize in Flutter, a mobile app development framework. Working on my AI skills atm!'
              image='/images/linkedin-me.jpg'
              footer='Developer | Designer'
            />
          </motion.div>

          {/* Mobile Apps Portfolio Section */}
          <motion.div
            className={`${cardStyles.floatingLinkedin} group`}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            }}
          >
            <div className='card-glass p-6 h-full transition-all duration-300 group-hover:shadow-glow'>
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <span className='text-4xl'>📱</span>
                </div>
                <div className='flex-1'>
                  <h4 className='text-xl font-semibold text-neutral-100 mb-2'>
                    Mobile App Portfolio
                  </h4>
                  <p className='text-neutral-300 text-sm leading-relaxed mb-4'>
                    Detailed case studies of my mobile applications, including
                    design process and output.
                  </p>
                  <motion.a
                    href='https://guinto.tech/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors duration-200'
                    whileHover={{ x: 4 }}
                  >
                    <span>View Guinto Tech Website</span>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* 
          <motion.div
            className={cardStyles.floatingLinkedin}
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
          >
            <BusinessCard
              username='@guinto'
              description='Let`s connect! 🦄.'
              image='/images/linkedin-me.jpg'
              footer='Linkedin'
            />
          </motion.div>

          <motion.div
            className={`${cardStyles.floatingGithub} xl:col-span-2`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <BusinessCard
              username='@antonvinceguinto'
              description='Check out what projects I&rsquo;m working on 👨‍💻.'
              image='/images/github-me.jpg'
              footer='Github'
            />
          </motion.div> */}
        </div>
      </motion.div>
    </div>
  );
}
