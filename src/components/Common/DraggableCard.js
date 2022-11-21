import { Draggable } from 'react-beautiful-dnd';

// type = {'dark', 'light', 'stable', 'empty'}
export const DraggableCard = ({ id, index, type, children }) => {
  if (type === 'dark') {
    return (
      <Draggable draggableId={id} index={index}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className=" min-h-24 h-fit bg-primary1 text-assist2 border-4 border-assist2 rounded-full flex items-stretch"
            >
              <div className="relative basis-24">
                <span className="w-1.5 h-3 rounded-full bg-assist2 absolute top-1/3 left-1/4 -translate-x-1/2"></span>
                <span className="w-1.5 h-3 rounded-full bg-assist2 absolute top-1/3 left-3/4 -translate-x-1/2"></span>
                <span className="border-x-6 border-t-7 border-transparent border-t-primary3 absolute top-1/2 left-1/2 -translate-x-1/2"></span>
              </div>
              <div className="p-4 flex-grow flex justify-center items-center">
                {children}
              </div>
            </div>
          );
        }}
      </Draggable>
    );
  }
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="bg-primary1 text-assist2 p-4"
          >
            {children}
          </div>
        );
      }}
    </Draggable>
  );
};
