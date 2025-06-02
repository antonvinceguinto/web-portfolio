import { motion } from 'framer-motion';
import BounceAnimation from './BounceAnimation';

export default function LetsWorkTogether() {
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
          <h2 className='section-title text-center'>
            Let&apos;s Work Together
          </h2>
          <p className='subtitle text-center max-w-2xl mx-auto'>
            Ready to bring your ideas to life? I&apos;m always excited to work
            on new projects and collaborate with amazing people. projects and
            collaborate with amazing people.
          </p>
        </div>

        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href='mailto:antonvinceguinto@gmail.com'
            className='btn-primary inline-flex items-center justify-center text-lg px-8 py-4'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get In Touch</span>
            <svg
              className='w-5 h-5 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.section>
    </BounceAnimation>
  );
}
