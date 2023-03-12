import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const StartScene = () => {
  return (
    <motion.main
      className="flex h-full w-full items-center justify-center"
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, y: '100%' }}
    >
      <Link to="training">開始</Link>
    </motion.main>
  );
};
