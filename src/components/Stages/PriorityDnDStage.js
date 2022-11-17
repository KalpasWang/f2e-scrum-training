import { useReducer } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useGameContext } from '../../context/gameContext';
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
      return state;
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
      return state;
    }
    default:
      return state;
  }
}

// function backlogReducer(state, action) {
//   switch (action.type) {
//     case 'addItemAt': {
//       const { item, index } = action.payload;
//       state.splice(index, 0, item);
//       return state;
//     }
//     case 'remove': {
//       const idx = state.findIndex((item) => item.id === action.payload);
//       if (idx >= 0) {
//         state.splice(idx, 1);
//       }
//       return state;
//     }
//     default:
//       return state;
//   }
// }

export const PriorityDnDStage = ({ onComplete }) => {
  const { state } = useGameContext();
  const stageData = state.stages[state.progress];
  const { items, candidateBoxes, backlog } = stageData;
  const [dndState, dispatch] = useReducer(dndReducer, {
    items,
    candidateBoxes,
    backlog,
  });

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
    const isCorrect = backlog.every((item, i) => item.priority === i + 1);
    if (isCorrect) {
      onComplete();
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <main className="h-full w-full flex flex-row gap-3">
        <div className="basis-1/2 px-2 flex flex-col items-stretch ">
          <Message
            text={stageData.messages[0].text}
            role={stageData.messages[0].role}
            className="mb-6"
          />
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
      </main>
    </DragDropContext>
  );
};
