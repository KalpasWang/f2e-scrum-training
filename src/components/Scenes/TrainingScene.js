import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameContext } from '../../context/gameContext';
import { Bar } from '../Common';
import {
  DialogStage,
  PriorityDnDStage,
  GroupChatStage,
  SprintListDnDStage,
} from '../Stages';

export const TrainingScene = ({ onComplete }) => {
  const { state } = useGameContext();
  const [currentStageName, setCurrentStageName] = useState(
    state.stages[0].name
  );

  const nextStageHandler = () => {
    onComplete();
    const i = state.progress - 1;
    setCurrentStageName(state.stages[i].name);
  };

  const Stages = {
    DialogStage,
    PriorityDnDStage,
    GroupChatStage,
    SprintListDnDStage,
  };
  const CurrentStage = Stages[currentStageName];

  return (
    <motion.div
      className="container relative  h-full w-full flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      <div class="absolute left-0 top-7">
        <button type="button" className="text-assist1 leading-6">
          &lt; 回上一頁
        </button>
      </div>
      <div className="my-4 w-full">
        <Bar value={state.progress} maxValue={state.stagesAmount} />
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        <CurrentStage onComplete={nextStageHandler} />
      </div>
    </motion.div>
  );
};
