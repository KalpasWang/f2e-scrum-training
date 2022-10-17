import React, { useState } from 'react';
import { DialogStage, DnDStage } from '../Stages';

export const TrainingScene = ({ game, onComplete }) => {
  const { stages } = game;
  const [currentStage, setCurrentStage] = useState({
    name: stages[0].name,
    index: 0,
  });

  const nextStageHandler = (params) => {
    setCurrentStage((prevStage) => {
      if (prevStage.index >= stages.length - 1) {
        onComplete();
      }
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
    </>
  );
};
