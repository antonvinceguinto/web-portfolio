import { motion } from 'framer-motion';
import { useState } from 'react';
import BounceAnimation from './BounceAnimation';

export default function LetsWorkTogether() {
  const [copied, setCopied] = useState(false);
  const email = 'antonvinceguinto@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <BounceAnimation>
      <motion.section
        className='py-20'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className='text-center mb-16'>
          <h2 className='section-title text-center'>Contact Me</h2>
          <motion.button
            onClick={copyToClipboard}
            className='subtitle text-center max-w-2xl mx-auto underline cursor-pointer hover:text-primary-400 transition-colors duration-200 relative group'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            {email}

            {/* Tooltip */}
            <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none'>
              <div className='bg-neutral-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap'>
                {copied ? 'Copied!' : 'Click to copy'}
                <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800' />
              </div>
            </div>
          </motion.button>

          {/* Success message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 10 }}
            transition={{ duration: 0.2 }}
            className='mt-4 text-green-400 text-sm font-medium'
          >
            ✓ Email copied to clipboard!
          </motion.div>
        </div>
      </motion.section>
    </BounceAnimation>
  );
}
