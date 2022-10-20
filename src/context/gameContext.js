import React, { useContext, useReducer } from 'react';
import game from '../shared/gameConfig.json';

const initialState = {
  currentScene: 'start',
  stages: game.stages,
  companyName: game.companyName,
  progress: 0,
  stagesAmount: game.stages.length,
};

export const GameContext = React.createContext({
  state: {
    currentScene: '',
    stages: [],
    companyName: '',
    progress: 0,
    stagesAmount: 0,
  },
  dispatch: () => {},
});

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'nextSatge': {
      let scene = 'training';
      let progress = state.progress + 1;
      if (state.currentScene === 'start') {
        scene = 'training';
      }
      if (state.progress === state.stagesAmount) {
        scene = 'end';
      }
      if (state.progress > state.stagesAmount) {
        scene = 'start';
        progress = 0;
      }
      return { ...state, progress: progress, currentScene: scene };
    }
    default:
      return state;
  }
};

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
