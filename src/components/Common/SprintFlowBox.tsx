import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { MeetingSpace } from '../../shared/types';
import { DraggableCard } from './DraggableCard';

type SprintFlowBoxProps = {
  className?: string;
  space: MeetingSpace;
  placeholder?: string;
};

export const SprintFlowBox = ({
  className = '',
  space,
  placeholder,
}: SprintFlowBoxProps) => {
  return (
    <Droppable droppableId={space.id} isDropDisabled={!!space.item}>
      {(provided, snapshot) => {
        return (
          <div
            className={`flex h-18 w-56 flex-col items-center justify-center rounded-full border-3 border-dashed border-primary3 text-primary3 ${className}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {placeholder && (
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {placeholder}
              </span>
            )}
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
