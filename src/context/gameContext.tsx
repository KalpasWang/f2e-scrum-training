import React, {
  useContext,
  useReducer,
  PropsWithChildren,
  Dispatch,
} from 'react';
import game from '../shared/gameConfig.json';

const initialState = {
  stages: game.stages,
  progress: 1,
  stagesAmount: game.stages.length,
};

type ActionType = { type: 'nextStage' } | { type: 'prevStage' };

type GameContextType = {
  state: typeof initialState;
  dispatch: Dispatch<ActionType>;
};

export const GameContext = React.createContext<GameContextType>({
  state: {
    stages: [],
    progress: 1,
    stagesAmount: 0,
  },
  dispatch: () => {
    /* update */
  },
});

const gameReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'nextStage': {
      let progress = state.progress + 1;
      if (progress > state.stagesAmount) {
        progress = 1;
      }
      return { ...state, progress };
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

export const GameProvider = ({ children }: PropsWithChildren) => {
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
