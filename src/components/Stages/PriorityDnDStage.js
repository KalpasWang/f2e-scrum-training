import { useReducer } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useGameContext } from '../../context/gameContext';
import { Button } from '../Common';
import { DraggableCard } from '../Common/DraggableCard';
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
  const targets = { candidates, backlog };

  function handleDragEnd({ source, destination }) {
    if (!destination) return;

    const draggedItem = targets[source.droppableId][source.index];
    candidatesDispatch('remove', draggedItem.id);
    backlogDispatch('addItemAt', {
      item: draggedItem,
      index: destination.index,
    });
  }

  return (
    <main className="h-full w-full flex flex-row gap-3">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="basis-1/2 px-2">
          <Message
            text={stageData.messages[0].text}
            role={stageData.messages[0].role}
            className="mb-6"
          />
          <Droppable droppableId="candidates">
            {(provided, snapshot) => {
              return (
                <div
                  className="bg-red-300 h-full"
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
        <div className="basis-1/2 px-2">
          <h1 className="text-3xl text-right font-bold mb-2">
            {stageData.listTitle}
          </h1>
          <Droppable droppableId="backlog">
            {(provided, snapshot) => {
              return (
                <div
                  className="bg-lime-300 h-full"
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
          <div>
            <Button onClick={onComplete}>{stageData.action}</Button>
          </div>
        </div>
      </DragDropContext>
    </main>
  );
};
