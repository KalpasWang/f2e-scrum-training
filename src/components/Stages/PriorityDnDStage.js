import { useReducer, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
// import { useGameContext } from '../../context/gameContext';
import { Button } from '../Common';
import { DroppableBox } from '../Common';
import { Message } from '../Common/Message';

function dndReducer(state, action) {
  switch (action.type) {
    case 'add/remove': {
      const { item, droppableId, index } = action.payload;
      state[droppableId].items.splice(index, 1, item);
      return { ...state };
    }
    default:
      return state;
  }
}

export const PriorityDnDStage = ({ stageData, onComplete }) => {
  // const { state } = useGameContext();
  const { candidates, backlog } = stageData;
  const [dndState, dispatch] = useReducer(dndReducer, {
    candidates,
    backlog,
  });
  const [btnState, setBtnState] = useState('disabled');

  function handleDragEnd({ draggableId, source, destination }) {
    // 排除拖移到非 Droppable 與 沒有移動的情形
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceItem = dndState[source.droppableId].items[source.index];
    const targetItem =
      dndState[destination.droppableId].items[destination.index];

    dispatch({
      type: 'add/remove',
      payload: {
        ...source,
        item: targetItem,
      },
    });
    dispatch({
      type: 'add/remove',
      payload: {
        ...destination,
        item: sourceItem,
      },
    });
  }

  function checkAnswers() {
    const isCorrect = dndState.backlog.itemsId.every((itemId, i) => {
      const item = dndState.items.find((e) => e.id === itemId);
      if (item) {
        return item.priority === i + 1;
      }
      return false;
    });
    if (isCorrect) {
      onComplete();
    }
  }

  return (
    <div>
      <div className="flex justify-start items-center relative z-10">
        <img
          className="mr-4"
          src={require('../../assets/' + stageData.roleImg)}
          alt="role"
        />
        <svg
          width="44"
          height="8"
          viewBox="0 0 44 8"
          fill="none"
          className="-translate-y-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2C8.51163 5.01849 25.6279 9.24439 42 2"
            stroke="#FF60FA"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <Message
          borderColor={stageData.messageColor}
          color={stageData.messageColor}
          text={stageData.message}
          img={stageData.messageImg}
          className="-translate-y-6"
        />
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="h-full w-full flex flex-col lg:flex-row gap-y-4 justify-between items-stretch -translate-y-20">
          <div className="basis-5/12 px-6 pb-8 pt-28 bg-assist1 rounded-5xl">
            <DroppableBox
              id="candidates"
              type="candidates"
              items={dndState.candidates.items}
              className="gap-4"
            />
          </div>
          <div className="basis-5/12 flex flex-col px-6 py-8 bg-assist1 rounded-5xl">
            <h1 className="text-3xl-auto text-assist2 text-center mb-4">
              {dndState.backlog.title}
            </h1>
            <DroppableBox
              id="backlog"
              type="priority"
              items={dndState.backlog.items}
              placeholders={dndState.backlog.placeholders}
              className="gap-4 flex-grow"
            />
          </div>
        </div>
      </DragDropContext>
      <div className="text-center py-8">
        <Button type={btnState} onClick={onComplete}>
          {stageData.action}
        </Button>
      </div>
    </div>
  );
};
