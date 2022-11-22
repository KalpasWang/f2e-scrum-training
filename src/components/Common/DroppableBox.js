import { Droppable } from 'react-beautiful-dnd';
import { DraggableCard } from './DraggableCard';

// type = { 'candidates', 'priority', 'backlog', 'sprint' }

export const DroppableBox = ({ id, className, items = [] }) => {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => {
        return (
          <div
            className={`w-full h-full flex flex-col justify-start items-stretch ${className}`}
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.droppableProps}
          >
            {items.map((item, i) => {
              return (
                <DraggableCard
                  key={item.id}
                  id={item.id}
                  index={i}
                  type={item.type}
                >
                  {item.text}
                </DraggableCard>
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
