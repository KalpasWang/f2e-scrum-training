import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';

export const DroppableBox = ({ id, className, children }) => {
  const containerStyle = classNames(
    'bg-red-300 border border-slate-400',
    className
  );
  console.log(children);
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => {
        return (
          <div
            className={containerStyle}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {children}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
