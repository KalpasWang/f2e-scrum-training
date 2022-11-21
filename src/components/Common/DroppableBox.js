import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { DraggableCard } from './DraggableCard';

// type = { 'candidates', 'priority', 'backlog', 'sprint' }

export const DroppableBox = ({
  id,
  className,
  items = [],
  type,
  placeholders,
}) => {
  const containerStyle = classNames(
    'w-full h-full flex flex-col justify-between items-stretch',
    className
  );

  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => {
        return (
          <div
            className={containerStyle}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, i) => {
              return (
                <div
                  key={item.id || i}
                  className={classNames({
                    'border-3 border-primary3 border-dashed rounded-full h-16 flex justify-center items-center text-primary3':
                      item === 'empty' && type !== 'candidates',
                  })}
                >
                  {item === 'empty' && placeholders && placeholders[i]}
                  {item !== 'empty' && (
                    <DraggableCard id={item.id} index={i}>
                      {item.text}
                    </DraggableCard>
                  )}
                </div>
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
