import { Droppable } from 'react-beautiful-dnd';
import { DraggableCard } from './DraggableCard';

// type = { 'candidates', 'priority', 'backlog', 'sprint' }

export const DroppableBox = ({ id, className, items = [] }) => {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => {
        return (
          <div
            className={`w-full h-full flex flex-col justify-start items-stretch flex-nowrap overflow-visible ${className}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, i) => {
              return (
                <DraggableCard
                  key={item.id}
                  id={item.id}
                  index={i}
                  item={item}
                />
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
