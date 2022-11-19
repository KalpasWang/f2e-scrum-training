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
    <motion.main
      className="container relative h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      {state.progress > 1 && (
        <div className="absolute left-6 top-7">
          <button type="button" className="text-assist1 leading-6">
            &lt; 回上一頁
          </button>
        </div>
      )}
      <div className="container flex flex-col justify-start items-stretch">
        <Bar
          className="mt-20 mb-14"
          value={state.progress}
          maxValue={state.stagesAmount}
        />
        <div className="flex-grow overflow-y-auto">
          <CurrentStage
            stageData={state.stages[state.progress - 1]}
            onComplete={nextStageHandler}
          />
        </div>
      </div>
    </motion.main>
  );
};
