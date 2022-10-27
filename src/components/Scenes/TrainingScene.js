import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameContext } from '../../context/gameContext';
import { Bar } from '../Common';
import { DialogStage, PriorityDnDStage, GroupChatStage } from '../Stages';

export const TrainingScene = ({ onComplete }) => {
  const { state } = useGameContext();
  const [currentStageName, setCurrentStageName] = useState(
    state.stages[0].name
  );

  const nextStageHandler = () => {
    if (state.progress < state.stagesAmount - 1) {
      const nextIdx = state.progress + 1;
      setCurrentStageName(state.stages[nextIdx].name);
    }
    onComplete();
  };

  const Stages = { DialogStage, PriorityDnDStage, GroupChatStage };
  const CurrentStage = Stages[currentStageName];

  return (
    <motion.div
      className="container mx-auto h-full w-full flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, y: '100%' }}
    >
      <div className="my-4 w-full">
        <Bar value={state.progress} maxValue={state.stagesAmount} />
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        <CurrentStage onComplete={nextStageHandler} />
      </div>
    </motion.div>
  );
};
