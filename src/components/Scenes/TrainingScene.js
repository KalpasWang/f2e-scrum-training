import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useGameContext } from '../../context/gameContext';
import { Bar } from '../Common';
import {
  DialogStage,
  PriorityDnDStage,
  GroupChatStage,
  SprintListDnDStage,
  MessagesStage,
  SprintMeetingStage,
  SprintFlowStage,
  EndingStage,
} from '../Stages';

export const TrainingScene = () => {
  const { state, dispatch } = useGameContext();
  const [currentStageName, setCurrentStageName] = useState(
    state.stages[0].name
  );

  if (currentStageName !== state.stages[state.progress - 1].name) {
    setCurrentStageName(state.stages[state.progress - 1].name);
  }

  const nextStageHandler = () => {
    dispatch({ type: 'nextStage' });
  };

  const prevPageHandler = () => {
    dispatch({ type: 'prevStage' });
  };

  const Stages = {
    DialogStage,
    PriorityDnDStage,
    GroupChatStage,
    SprintListDnDStage,
    MessagesStage,
    SprintMeetingStage,
    SprintFlowStage,
    EndingStage,
  };
  const CurrentStage = Stages[currentStageName];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <motion.main
      key={state.finishedCount}
      className="container relative h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
    >
      {state.progress > 1 && (
        <div className="absolute left-6 top-7">
          <button
            type="button"
            onClick={prevPageHandler}
            className="text-assist1 leading-6"
          >
            &lt; 回上一頁
          </button>
        </div>
      )}
      <div className="container flex flex-col justify-start items-stretch">
        <Bar
          className="mt-20 mb-2"
          value={state.progress}
          maxValue={state.stagesAmount}
        />
        <div className="flex-grow">
          <CurrentStage
            stageData={state.stages[state.progress - 1]}
            onComplete={nextStageHandler}
          />
        </div>
      </div>
    </motion.main>
  );
};
