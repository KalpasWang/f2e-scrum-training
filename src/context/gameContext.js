import React, { useContext, useReducer } from 'react';
import game from '../shared/gameConfig.json';

const initialState = {
  stages: game.stages,
  progress: 1,
  stagesAmount: game.stages.length,
  finishedCount: 0,
};

export const GameContext = React.createContext({
  state: {
    stages: [],
    progress: 1,
    stagesAmount: 0,
    finishedCount: 0,
  },
  dispatch: () => {},
});

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'nextStage': {
      let progress = state.progress + 1;
      let finishedCount = state.finishedCount;
      if (progress > state.stagesAmount) {
        progress = 1;
        finishedCount++;
      }
      return { ...state, progress, finishedCount };
    }
    case 'prevStage': {
      return { ...state, progress: state.progress - 1 };
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
