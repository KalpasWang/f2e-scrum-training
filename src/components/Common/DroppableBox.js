import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { DraggableCard } from './DraggableCard';

export const DroppableBox = ({ id, className, item }) => {
  const containerStyle = classNames(
    'bg-red-300 border border-slate-400',
    'min-h-3.75',
    className
  );
  return (
    <Droppable droppableId={id} isDropDisabled={!!item}>
      {(provided, snapshot) => {
        return (
          <div
            className={containerStyle}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {item && (
              <DraggableCard id={item.id} index={0}>
                {item.text}
              </DraggableCard>
            )}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
