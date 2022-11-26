import classNames from 'classnames';
import { Droppable } from 'react-beautiful-dnd';
import { DraggableCard } from './DraggableCard';

// type = { 'candidates', 'priority', 'backlog', 'sprint' }

export const DroppableBox = ({ id, type = 'flex', className, items = [] }) => {
  const container = classNames('overflow-visible', {
    'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4': type === 'grid',
    'flex flex-col justify-start items-stretch flex-nowrap': type === 'flex',
  });

  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => {
        return (
          <div
            className={`${container} ${className}`}
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
