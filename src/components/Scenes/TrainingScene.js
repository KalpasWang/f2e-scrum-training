import React, { useState } from 'react';
import { useGameContext } from '../../context/gameContext';
import { Bar } from '../Common';
import { DialogStage, DnDStage, GroupChatStage } from '../Stages';

export const TrainingScene = ({ onComplete }) => {
  const { state, dispatch } = useGameContext();
  const [currentStageName, setCurrentStageName] = useState(
    state.stages[0].name
  );

  const nextStageHandler = () => {
    if (state.progress < state.stagesAmount - 1) {
      const currentStageNum = state.progress - 1;
      setCurrentStageName(state.stages[currentStageNum + 1].name);
    }
    dispatch({ type: 'nextSatge' });
  };

  const Stages = { DialogStage, DnDStage, GroupChatStage };
  const CurrentStage = Stages[currentStageName];

  return (
    <div className="container mx-auto">
      <div className="my-4">
        <Bar value={state.progress} maxValue={state.stagesAmount} />
      </div>
      <div className="h-full">
        <CurrentStage onComplete={nextStageHandler} />
        {/* {currentStage.name === 'DialogStage' && (
          <DialogStage onComplete={nextStageHandler} />
        )}
        {currentStage.name === 'DnDStage' && (
          <DnDStage onComplete={nextStageHandler} />
        )}
        {currentStage.name === 'GroupChatStage' && (
          <GroupChatStage onComplete={nextStageHandler} />
        )} */}
      </div>
    </div>
  );
};
