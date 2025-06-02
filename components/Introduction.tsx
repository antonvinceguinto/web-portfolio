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

        <motion.p variants={itemVariants} className='subtitle max-w-2xl mb-12'>
          Passionate about creating exceptional digital experiences with modern
          technologies. I specialize in Flutter, a mobile app development
          framework.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row gap-4'
        >
          <motion.a
            href='https://guintocompany.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-primary inline-flex items-center justify-center'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Guinto Company Limited</span>
          </motion.a>

          {/* <motion.button
            className='btn-outline inline-flex items-center justify-center'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📄 View Resume</span>
          </motion.button> */}
        </motion.div>
      </motion.div>

      <motion.div
        className='flex-1 mt-16 lg:mt-0 lg:pl-16'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className='grid lg:grid xl:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0'>
          <motion.div
            className={cardStyles.floatingTwitter}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <BusinessCard
              username='@antonguinto'
              description='I tweet about web2+1 development. But mostly react & javascript.'
              footer='Twitter'
            />
          </motion.div>

          <motion.div
            className={cardStyles.floatingLinkedin}
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
          >
            <BusinessCard
              username='@guinto'
              description='Let`s connect! We might build the next unicorn startup🦄.'
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
              description='Check out what projects I&rsquo;m working on 👨‍💻. I also have some quite boring open source projects.'
              image='/images/github-me.jpg'
              footer='Github'
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
