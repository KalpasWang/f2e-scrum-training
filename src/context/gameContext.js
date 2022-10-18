import React, { useContext, useState } from 'react';
import game from '../shared/gameConfig.json';

export const GameContext = React.createContext({
  currentScene: 'start',
  setCurrentScene: () => {},
  stages: [],
  companyName: '',
});

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [currentScene, setCurrentScene] = useState('start');
  const { companyName, stages } = game;

  return (
    <GameContext.Provider
      value={{ currentScene, setCurrentScene, stages, companyName }}
    >
      {children}
    </GameContext.Provider>
  );
};
