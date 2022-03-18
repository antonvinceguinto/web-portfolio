import { AnimationProps, motion } from 'framer-motion';

export const BounceAnimation: React.FC = ({ children }) => {
  const cardVariants = {
    offscreen: {
      y: 150,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
};
