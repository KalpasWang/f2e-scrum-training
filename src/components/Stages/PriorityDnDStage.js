import { useReducer, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import { useGameContext } from '../../context/gameContext';
import { Button } from '../Common';
import { DraggableCard, DroppableBox } from '../Common';
import { Message } from '../Common/Message';

function dndReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { draggableId, droppableId, index } = action.payload;
      if (droppableId === 'backlog') {
        state.backlog.itemsId.splice(index, 0, draggableId);
      } else {
        const i = state.candidateBoxes.findIndex((b) => b.id === droppableId);
        if (i > -1) {
          state.candidateBoxes[i].itemId = draggableId;
        }
      }
      return { ...state };
    }
    case 'remove': {
      const { droppableId, index } = action.payload;
      if (droppableId === 'backlog') {
        state.backlog.itemsId.splice(index, 1);
      } else {
        const i = state.candidateBoxes.findIndex((b) => b.id === droppableId);
        if (i > -1) {
          state.candidateBoxes[i].itemId = '';
        }
      }
      return { ...state };
    }
    default:
      return state;
  }
}

export const PriorityDnDStage = ({ stageData, onComplete }) => {
  // const { state } = useGameContext();
  const { items, candidateBoxes, backlog } = stageData;
  const [dndState, dispatch] = useReducer(dndReducer, {
    items,
    candidateBoxes,
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

    dispatch({
      type: 'remove',
      payload: source,
    });
    dispatch({
      type: 'add',
      payload: {
        ...destination,
        draggableId,
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
      <div className="flex justify-start items-start overflow-visible">
        <img
          className="mr-4 -translate-y-6"
          src={require('../../assets/' + stageData.roleImg)}
          alt="role"
        />
        <svg
          width="44"
          height="8"
          viewBox="0 0 44 8"
          fill="none"
          className="translate-y-16"
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
        />
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="h-full w-full flex flex-row gap-3">
          <div className="basis-1/2 px-2 flex flex-col items-stretch ">
            {dndState.candidateBoxes.map((box) => {
              const item = dndState.items.find((c) => c.id === box.itemId);
              return (
                <DroppableBox
                  id={box.id}
                  key={box.id}
                  item={item}
                  className="my-3"
                />
              );
            })}
          </div>
          <div className="basis-1/2 px-2 flex flex-col items-stretch">
            <h1 className="text-3xl text-right font-bold mb-2">
              {dndState.backlog.title}
            </h1>
            <Droppable droppableId="backlog">
              {(provided, snapshot) => {
                return (
                  <div
                    className="bg-lime-300 flex-grow"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {dndState.backlog.itemsId.map((itemId, i) => {
                      const item = dndState.items.find((e) => e.id === itemId);
                      return (
                        <DraggableCard id={item.id} index={i} key={item.id}>
                          {item.text}
                        </DraggableCard>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
            <div className="mt-4 text-right">
              <Button onClick={checkAnswers}>{stageData.action}</Button>
            </div>
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
