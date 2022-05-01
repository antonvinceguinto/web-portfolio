import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const styles = {
  footer:
    'mt-10 md:mt-24 items-center justify-center bg-blue-900 bg-opacity-20 flex w-full m-auto',
  wrapper:
    'flex w-full max-w-[80vw] lg:max-w-[90vw] px-7 py-10 md:p-10 text-center items-center justify-center',
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className='flex flex-col md:flex-row w-full justify-between items-center'>
          <div className='flex gap-8'>
            <a
              target='_blank'
              href='https://github.com/antonvinceguinto'
              rel='noopener noreferrer'
            >
              <FaGithub size={32} />
            </a>
            <a
              target='_blank'
              href='https://twitter.com/antonguinto'
              rel='noopener noreferrer'
            >
              <FaTwitter size={32} />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/guinto/'
              rel='noopener noreferrer'
            >
              <FaLinkedin size={32} />
            </a>
          </div>
          <div className='mt-10 md:mt-0 text-lg'>Anton Guinto &copy; 2022</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
