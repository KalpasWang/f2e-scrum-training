import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  RetroStage,
  EndingStage,
} from '../Stages';
import { StageName } from '../../shared/types';
import {
  DIALOG,
  ENDING,
  GROUP_CHAT,
  MESSAGES,
  PRIORITY_DND,
  RETRO,
  SPRINT_FLOW,
  SPRINT_LIST_DND,
  SPRINT_MEETING,
} from '../../shared/constants';

export const TrainingScene = () => {
  const { state, dispatch } = useGameContext();
  const [currentStageName, setCurrentStageName] = useState<StageName>(
    state.stages[0].name
  );
  const navigate = useNavigate();
  const currentStageData = state.stages[state.progress - 1];

  if (currentStageName !== state.stages[state.progress - 1].name) {
    setCurrentStageName(state.stages[state.progress - 1].name);
  }

  function nextStageHandler() {
    if (state.progress >= state.stagesAmount) {
      navigate('/');
    }
    dispatch({ type: 'nextStage' });
  }

  function prevPageHandler() {
    dispatch({ type: 'prevStage' });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <motion.main
      className="container relative h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {state.progress > 1 && (
        <div className="absolute left-6 top-7">
          <button
            type="button"
            onClick={prevPageHandler}
            className="leading-6 text-assist1"
          >
            &lt; 回上一頁
          </button>
        </div>
      )}
      <div className="container flex flex-col items-stretch justify-start p-0">
        <Bar
          className="mt-20 mb-2"
          value={state.progress}
          maxValue={state.stagesAmount}
        />
        <div className="flex-grow">
          {currentStageData.name === DIALOG && (
            <DialogStage
              stageData={currentStageData}
              onComplete={nextStageHandler}
            />
          )}
          {currentStageData.name === PRIORITY_DND && (
            <PriorityDnDStage
              stageData={currentStageData}
              onComplete={nextStageHandler}
            />
          )}
          {currentStageData.name === GROUP_CHAT && (
            <GroupChatStage
              stageData={currentStageData}
              onComplete={nextStageHandler}
            />
          )}
          {currentStageData.name === SPRINT_LIST_DND && (
            <SprintListDnDStage
              stageData={currentStageData}
              onComplete={nextStageHandler}
            />
          )}
          {currentStageData.name === MESSAGES && (
            <MessagesStage
              stageData={currentStageData}
              onComplete={nextStageHandler}
            />
          )}
          {currentStageData.name === SPRINT_MEETING && (
            <SprintMeetingStage
              stageData={currentStageData}
              onComplete={nextStageHandler}
            />
          )}
          {currentStageData.name === SPRINT_FLOW && (
            <SprintFlowStage
              stageData={currentStageData}
              onComplete={nextStageHandler}
            />
          )}
          {currentStageData.name === RETRO && (
            <RetroStage
              stageData={currentStageData}
              onComplete={nextStageHandler}
            />
          )}
          {currentStageData.name === ENDING && (
            <EndingStage
              stageData={currentStageData}
              onComplete={nextStageHandler}
            />
          )}
        </div>
      </div>
    </motion.main>
  );
};
