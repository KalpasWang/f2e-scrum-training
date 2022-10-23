import { useReducer } from 'react';
import { useGameContext } from '../../context/gameContext';
import { Button } from '../Common';
import { Message } from '../Common/Message';

function candidatesReducer(state, action) {
  switch (action.type) {
    case 'remove': {
      const idx = state.findIndex((item) => item.id === action.payload);
      if (idx >= 0) {
        state.splice(idx, 1);
      }
      return state;
    }
    default:
      return state;
  }
}

function backlogReducer(state, action) {
  switch (action.type) {
    case 'addItemAt': {
      const { item, index } = action.payload;
      state.splice(index, 0, item);
      return state;
    }
    default:
      return state;
  }
}

export const PriorityDnDStage = ({ onComplete }) => {
  const { state } = useGameContext();
  const stageData = state.stages[state.progress];
  const [candidates, candidatesDispatch] = useReducer(
    candidatesReducer,
    stageData.items
  );
  const [backlog, backlogDispatch] = useReducer(backlogReducer, []);

  return (
    <main className="h-full w-full flex flex-row gap-3">
      <div className="basis-1/2 px-2">
        <Message
          text={stageData.messages[0].text}
          role={stageData.messages[0].role}
          className="mb-6"
        />
      </div>
      <div className="basis-1/2 px-2">
        <h1>{stageData.listTitle}</h1>
        <div>
          <Button onClick={onComplete}>{stageData.action}</Button>
        </div>
      </div>
    </main>
  );
};
