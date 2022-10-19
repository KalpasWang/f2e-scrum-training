import React, { useContext, useReducer } from 'react';
import game from '../shared/gameConfig.json';

const initialState = {
  currentScene: 'start',
  stages: game.stages,
  companyName: game.companyName,
  progress: 1,
  stagesAmount: game.stages.length + 2,
};

export const GameContext = React.createContext({
  state: initialState,
  dispatch: () => {},
});

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'nextSatge': {
      if (state.progress === 1) {
        return { ...state, progress: 2, currentScene: 'training' };
      }
      if (state.progress === state.stagesAmount) {
        return { ...state, progress: 1, currentScene: 'start' };
      }
      let scene = 'training';
      if (state.progress === state.stagesAmount - 1) {
        scene = 'end';
      }
      return { ...state, progress: state.progress + 1, currentScene: scene };
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
