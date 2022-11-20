import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { DraggableCard } from './DraggableCard';

export const DroppableBox = ({ id, className, items = [], size = 1 }) => {
  const containerStyle = classNames(
    'bg-red-300 border border-slate-400',
    {
      'h-28': !items.length,
    },
    className
  );
  return (
    <Droppable droppableId={id} isDropDisabled={items.length >= size}>
      {(provided, snapshot) => {
        return (
          <div
            className={containerStyle}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.length &&
              items.map((itemId, i) => {
                // TODO
                const item = 0;
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
  );
};
