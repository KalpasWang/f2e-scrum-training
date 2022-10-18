import React, { useState } from 'react';
import { useGameContext } from '../../context/gameContext';
import { DialogStage, DnDStage, GroupChatStage } from '../Stages';

export const TrainingScene = ({ onGameComplete }) => {
  const { stages } = useGameContext();
  const [currentStage, setCurrentStage] = useState({
    name: stages[0].name,
    index: 0,
  });

  const nextStageHandler = () => {
    if (currentStage.index >= stages.length - 1) {
      onGameComplete();
      return;
    }
    setCurrentStage((prevStage) => {
      return {
        name: stages?.[prevStage.index + 1]?.name,
        index: prevStage.index + 1,
      };
    });
  };

  return (
    <>
      {currentStage.name === 'DialogStage' && (
        <DialogStage onComplete={nextStageHandler} />
      )}
      {currentStage.name === 'DnDStage' && (
        <DnDStage onComplete={nextStageHandler} />
      )}
      {currentStage.name === 'GroupChatStage' && (
        <GroupChatStage onComplete={nextStageHandler} />
      )}
    </>
  );
};
