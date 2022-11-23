import { Button } from '../Common';
import { motion } from 'framer-motion';

export const GroupChatStage = ({ stageData, onComplete }) => {
  const { roles, active } = stageData;
  const activeVariants = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, 0, -30],
      opacity: [0, 1, 1],
      transition: {
        duration: 1,
        times: [0, 0.5, 1],
      },
    },
  };
  const normalVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="h-full">
      <div className="relative min-h-max h-[60vh]">
        <div className="bg-assist1 rounded-3xl h-2/3 relative"></div>
        <div className="absolute inset-0 flex justify-evenly items-end">
          {roles.map((role) => {
            const img = require('../../assets/' + role.img);
            const variants =
              active.role === role.id ? activeVariants : normalVariants;
            return (
              <motion.div
                initial="initial"
                animate="animate"
                variants={variants}
                key={role.id}
                className="basis-1/6"
              >
                <img src={img} alt={role.name} />
                <p className="text-center text-xl text-assist1 pt-6">
                  {role.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
