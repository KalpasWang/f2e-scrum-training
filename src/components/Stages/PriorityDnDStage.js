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
      state[droppableId].itemsId.splice(index, 0, draggableId);
      return { ...state };
    }
    case 'remove': {
      const { droppableId, index } = action.payload;
      state[droppableId].itemsId.splice(index, 1);
      return { ...state };
    }
    default:
      return state;
  }
}

export const PriorityDnDStage = ({ stageData, onComplete }) => {
  // const { state } = useGameContext();
  const { items, candidates, backlog } = stageData;
  const [dndState, dispatch] = useReducer(dndReducer, {
    items,
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
      <div className="flex justify-start items-center">
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
        <div className="h-full w-full md:columns-1 columns-2 gap-3">
          <div className="px-6 pb-8 pt-28 bg-assist1 rounded-4xl">
            <DroppableBox
              id="candidates"
              className="w-full h-full flex flex-col justify-between items-start"
              items={dndState.candidates}
              size="4"
            />
          </div>
          <div className="px-6 py-32 bg-assist1 rounded-4xl">
            <h1 className="text-3xl text-center mb-4">
              {dndState.backlog.title}
            </h1>
            <div className="flex flex-col justify-between items-stretch">
              <Droppable droppableId="backlog">
                {(provided, snapshot) => {
                  return (
                    <div
                      className="bg-lime-300 flex-grow"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {dndState.backlog.itemsId.map((itemId, i) => {
                        const item = dndState.items.find(
                          (e) => e.id === itemId
                        );
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
