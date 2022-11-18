import { motion } from 'framer-motion';
import { Button } from '../Common';

export const StartScene = ({ onComplete }) => {
  return (
    <motion.main
      className="h-full w-full flex justify-center items-center"
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, y: '100%' }}
    >
      <Button onClick={onComplete}>Start</Button>
    </motion.main>
  );
};
