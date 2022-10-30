import { useReducer } from 'react';
import { useGameContext } from '../../context/gameContext';
import { Button } from '../Common';
import { DraggableCard } from '../Common/DraggableCard';

function candidatesReducer(state, action) {
  switch (action.type) {
    case 'addItemAt': {
      const { item, index } = action.payload;
      state.splice(index, 0, item);
      return state;
    }
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

export const SprintListDnDStage = ({ onComplete }) => {
  const { state } = useGameContext();
  const stageData = state.stages[state.progress];
  const [candidates, candidatesDispatch] = useReducer(
    candidatesReducer,
    stageData.items
  );
  const [backlog, backlogDispatch] = useReducer(backlogReducer, []);
  const target = { candidates, backlog };
  const dispatch = { candidates: candidatesDispatch, backlog: backlogDispatch };

  function handleDragEnd({ source, destination }) {
    if (!destination) return;

    const draggedItem = target[source.droppableId][source.index];
    dispatch[source.droppableId]({
      type: 'remove',
      payload: draggedItem.id,
    });
    dispatch[destination.droppableId]({
      type: 'addItemAt',
      payload: {
        item: draggedItem,
        index: destination.index,
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
          <Droppable droppableId="candidates">
            {(provided, snapshot) => {
              return (
                <div
                  className="bg-red-300 flex-grow flex flex-col justify-evenly items-stretch"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {candidates.map((item, i) => {
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
        <div className="basis-1/2 px-2 flex flex-col items-stretch">
          <h1 className="text-3xl text-right font-bold mb-2">
            {stageData.listTitle}
          </h1>
          <Droppable droppableId="backlog">
            {(provided, snapshot) => {
              return (
                <div
                  className="bg-lime-300 flex-grow"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {backlog.map((item, i) => {
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
