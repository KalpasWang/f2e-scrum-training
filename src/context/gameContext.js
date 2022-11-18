import React, { useContext, useReducer } from 'react';
import game from '../shared/gameConfig.json';

const initialState = {
  stages: game.stages,
  progress: 1,
  stagesAmount: game.stages.length,
};

export const GameContext = React.createContext({
  state: {
    stages: [],
    progress: 1,
    stagesAmount: 0,
  },
  dispatch: () => {},
});

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'nextSatge': {
      let progress = state.progress + 1;
      if (progress > state.stagesAmount) {
        progress = 1;
      }
      return { ...state, progress: progress };
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
