import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function getCurrentYear(): string {
  return new Date().getFullYear().toString();
}

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/antonvinceguinto',
    label: 'GitHub',
    color: 'hover:text-neutral-300',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/TonbeansDev',
    label: 'Twitter',
    color: 'hover:text-blue-400',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/guinto/',
    label: 'LinkedIn',
    color: 'hover:text-blue-500',
  },
];

function Footer() {
  return (
    <footer className='relative mt-20'>
      {/* Gradient separator */}
      <div className='h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-12' />

      <div className='container-modern pb-12'>
        <motion.div
          className='flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Social Links */}
          <div className='flex items-center space-x-6'>
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                target='_blank'
                href={href}
                rel='noopener noreferrer'
                className={`text-neutral-400 ${color} transition-all duration-300 p-3 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 backdrop-blur-sm`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className='text-center md:text-right'>
            <p className='text-neutral-400 text-sm'>
              © {getCurrentYear()} Anton Guinto. All rights reserved.
            </p>
            <p className='text-neutral-500 text-xs mt-1'>
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>

        {/* Additional footer content */}
        <motion.div
          className='mt-12 pt-8 border-t border-neutral-800/50'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
            <div className='flex items-center space-x-6 text-sm text-neutral-500'>
              <span>Made with ❤️</span>
            </div>

            <div className='flex items-center space-x-4 text-xs text-neutral-500'>
              <span>Available for freelance work</span>
              <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
