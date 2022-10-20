import React, { useState } from 'react';
import { useGameContext } from '../../context/gameContext';
import { Bar } from '../Common';
import { DialogStage, DnDStage, GroupChatStage } from '../Stages';

export const TrainingScene = ({ onComplete }) => {
  const { state } = useGameContext();
  const [currentStageName, setCurrentStageName] = useState(
    state.stages[0].name
  );

  const nextStageHandler = () => {
    if (state.progress < state.stagesAmount) {
      setCurrentStageName(state.stages[state.progress].name);
    }
    onComplete();
  };

  const Stages = { DialogStage, DnDStage, GroupChatStage };
  const CurrentStage = Stages[currentStageName];

  return (
    <div className="container mx-auto">
      <div className="my-4">
        <Bar value={state.progress} maxValue={state.stagesAmount + 1} />
      </div>
      <div className="h-full">
        <CurrentStage onComplete={nextStageHandler} />
      </div>
    </div>
  );
};
