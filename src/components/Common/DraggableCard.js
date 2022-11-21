import { Draggable } from 'react-beautiful-dnd';

export const DraggableCard = (props) => {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="bg-primary1 text-assist2 p-4"
          >
            {props.children}
          </div>
        );
      }}
    </Draggable>
  );
};
