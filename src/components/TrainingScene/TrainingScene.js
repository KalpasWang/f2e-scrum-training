import React, { useState } from 'react';

export const TrainingScene = ({ game }) => {
  const [currentStage, setCurrentStage] = useState(game.stages[0].name);
  const stages = [];

  return <div>{React.createElement(stages[currentStage])}</div>;
};
