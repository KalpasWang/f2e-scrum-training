import { Droppable } from 'react-beautiful-dnd';
import { DraggableCard } from './DraggableCard';

export const SprintFlowBox = ({ className, space }) => {
  return (
    <Droppable droppableId={space.id}>
      {(provided, snapshot) => {
        return (
          <div
            className={`w-56 h-18 border-3 border-primary3 border-dashed rounded-full text-primary3 flex flex-col justify-center items-center ${className}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              填入會議
            </span>
            {space.item && (
              <DraggableCard
                id={space.item.id}
                index={0}
                item={space.item}
                className="z-10"
              />
            )}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
