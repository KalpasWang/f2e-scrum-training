import { Draggable } from 'react-beautiful-dnd';
import dragIcon from '../../assets/drag-icon.svg';

// type = { 'purple', 'yellow', 'dropped-purple','dropped-yellow', 'points', 'meeting' }

const purpleCat = (provided, snapshot, className, children) => {
  let containerDraggingStyle = snapshot.isDragging ? 'rotate-16' : '';
  let bodyDraggingStyle = snapshot.isDragging ? 'border-dashed' : '';
  let eyesDraggingStyle = snapshot.isDragging ? '!top-1/2' : '';
  let mouthDraggingStyle = snapshot.isDragging ? 'top-2/3' : '';

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className={`relative transition-all ${containerDraggingStyle}`}>
        {/* 耳朵外框1 */}
        <span
          className={`absolute left-2 -top-1/4 border-x-26 border-b-44 border-transparent border-b-assist2 ${bodyDraggingStyle}`}
        ></span>
        {/* 耳朵外框2 */}
        <span
          className={`absolute left-12 -top-1/4 border-x-26 border-b-44 border-transparent border-b-assist2 ${bodyDraggingStyle}`}
        ></span>
        {snapshot.isDragging && (
          <>
            {/* 腳外框1 */}
            <span className="absolute left-1/4 bottom-2 h-16 w-8 translate-y-[2.875rem] -translate-x-[0.125rem] rotate-16 rounded-full border-4 border-dashed border-assist2 bg-primary1"></span>
            {/* 腳外框2 */}
            <span className="absolute left-[32%] bottom-2 h-16 w-8 translate-y-[2.875rem] -translate-x-[0.125rem] rotate-16 rounded-full border-4 border-dashed border-assist2 bg-primary1"></span>
            {/* 腳外框3 */}
            <span className="absolute right-[8%] bottom-2 h-16 w-8 translate-y-[2.875rem] translate-x-[0.125rem] rotate-16 rounded-full border-4 border-dashed border-assist2 bg-primary1"></span>
            {/* 腳外框4 */}
            <span className="absolute right-[15%] bottom-2 h-16 w-8 translate-y-[2.875rem] translate-x-[0.125rem] rotate-16 rounded-full border-4 border-dashed border-assist2 bg-primary1"></span>
          </>
        )}
        {/* 貓主體 */}
        <div
          className={`relative z-10 flex h-24 items-stretch rounded-full border-4 border-assist2 bg-primary1 text-assist2 ${bodyDraggingStyle} ${className}`}
        >
          {/* 耳朵1 */}
          <span className="absolute left-2 -top-1/4 border-x-22 border-b-44 border-transparent border-b-primary1"></span>
          {/* 耳朵2 */}
          <span className="absolute left-12 -top-1/4 border-x-22 border-b-44 border-transparent border-b-primary1"></span>
          {/* 臉 */}
          <div className="relative flex-shrink-0 basis-20">
            {/* 眼睛1 */}
            <span
              className={`absolute top-1/4 left-1/4 h-3 w-1.5 rounded-full bg-assist2 transition-all ${eyesDraggingStyle}`}
            ></span>
            {/* 眼睛2 */}
            <span
              className={`absolute top-1/4 left-3/4 h-3 w-1.5 rounded-full bg-assist2 transition-all ${eyesDraggingStyle}`}
            ></span>
            {/* 嘴巴 */}
            <span
              className={`absolute top-1/2 left-9 border-x-6 border-t-7 border-transparent border-t-primary3 transition-all ${mouthDraggingStyle}`}
            ></span>
          </div>
          {/* 身體 */}
          <div className="flex flex-grow items-center justify-center px-4">
            {children}
          </div>
          {snapshot.isDragging && (
            <>
              {/* 腳1 */}
              <span className="absolute left-1/4 bottom-2 h-12 w-6 translate-y-11 rotate-16 rounded-full bg-primary1"></span>
              {/* 腳2 */}
              <span className="absolute left-[32%] bottom-2 h-12 w-6 translate-y-11 rotate-16 rounded-full bg-primary1"></span>
              {/* 腳3 */}
              <span className="absolute right-[8%] bottom-2 h-12 w-6 translate-y-11 rotate-16 rounded-full bg-primary1"></span>
              {/* 腳4 */}
              <span className="absolute right-[15%] bottom-2 h-12 w-6 translate-y-11 rotate-16 rounded-full bg-primary1"></span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const yellowCat = (provided, snapshot, className, children) => {
  let containerDraggingStyle = snapshot.isDragging ? '-rotate-16' : '';
  let bodyDraggingStyle = snapshot.isDragging ? 'border-dashed' : '';
  let eyesDraggingStyle = snapshot.isDragging ? '!top-1/2' : '';
  let mouthDraggingStyle = snapshot.isDragging ? 'top-2/3' : '';

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className={`relative transition-all ${containerDraggingStyle}`}>
        {/* 耳朵外框1 */}
        <span className="absolute right-2 -top-1/4 border-x-26 border-b-44 border-transparent border-b-assist2"></span>
        {/* 耳朵外框2 */}
        <span className="absolute right-12 -top-1/4 border-x-26 border-b-44 border-transparent border-b-assist2"></span>
        {snapshot.isDragging && (
          <>
            {/* 腳外框1 */}
            <span className="absolute right-1/4 bottom-2 h-16 w-8 translate-y-[2.875rem] translate-x-[0.125rem] -rotate-16 rounded-full border-4 border-dashed border-assist2 bg-primary3"></span>
            {/* 腳外框2 */}
            <span className="absolute right-[32%] bottom-2 h-16 w-8 translate-y-[2.875rem] translate-x-[0.125rem] -rotate-16 rounded-full border-4 border-dashed border-assist2 bg-primary3"></span>
            {/* 腳外框3 */}
            <span className="absolute left-[8%] bottom-2 h-16 w-8 translate-y-[2.875rem] -translate-x-[0.125rem] -rotate-16 rounded-full border-4 border-dashed border-assist2 bg-primary3"></span>
            {/* 腳外框4 */}
            <span className="absolute left-[15%] bottom-2 h-16 w-8 translate-y-[2.875rem] -translate-x-[0.125rem] -rotate-16 rounded-full border-4 border-dashed border-assist2 bg-primary3"></span>
          </>
        )}
        {/* 貓主體 */}
        <div
          className={`relative z-10 flex h-24 items-stretch rounded-full border-4 border-assist2 bg-primary3 text-assist1 ${bodyDraggingStyle} ${className}`}
        >
          {/* 耳朵1 */}
          <span className="absolute right-2 -top-1/4 border-x-22 border-b-44 border-transparent border-b-primary3"></span>
          {/* 耳朵2 */}
          <span className="absolute right-12 -top-1/4 border-x-22 border-b-44 border-transparent border-b-primary3"></span>
          {/* 身體 */}
          <div className="flex flex-grow items-center justify-center px-4">
            {children}
          </div>
          {/* 臉 */}
          <div className="relative flex-shrink-0 basis-20">
            {/* 眼睛1 */}
            <span
              className={`absolute top-1/4 right-1/4 h-3 w-1.5 rounded-full bg-primary1 transition-all ${eyesDraggingStyle}`}
            ></span>
            {/* 眼睛2 */}
            <span
              className={`absolute top-1/4 right-3/4 h-3 w-1.5 rounded-full bg-primary1 transition-all ${eyesDraggingStyle}`}
            ></span>
            {/* 嘴巴 */}
            <span
              className={`absolute top-1/2 right-9 border-x-6 border-t-7 border-transparent border-t-primary2 transition-all ${mouthDraggingStyle}`}
            ></span>
          </div>
          {snapshot.isDragging && (
            <>
              {/* 腳1 */}
              <span className="absolute right-1/4 bottom-2 h-12 w-6 translate-y-11 -rotate-16 rounded-full bg-primary3"></span>
              {/* 腳2 */}
              <span className="absolute right-[32%] bottom-2 h-12 w-6 translate-y-11 -rotate-16 rounded-full bg-primary3"></span>
              {/* 腳3 */}
              <span className="absolute left-[8%] bottom-2 h-12 w-6 translate-y-11 -rotate-16 rounded-full bg-primary3"></span>
              {/* 腳4 */}
              <span className="absolute left-[15%] bottom-2 h-12 w-6 translate-y-11 -rotate-16 rounded-full bg-primary3"></span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const droppedCat = (provided, snapshot, className, children) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`flex h-24 items-stretch rounded-full border-4 border-assist2 bg-primary3 text-assist1 ${className}`}
    >
      <div className="flex flex-shrink-0 basis-1/6 items-center justify-center">
        <img src={dragIcon} alt="drag" />
      </div>
      {/* 身體 */}
      <div className="flex flex-grow items-center justify-center px-4">
        {children}
      </div>
      {/* 臉 */}
      <div className="relative flex-shrink-0 basis-20">
        {/* 眼睛1 */}
        <span className="absolute top-1/3 right-1/4 h-3 w-1.5 rounded-full bg-primary1"></span>
        {/* 眼睛2 */}
        <span className="absolute top-1/3 right-3/4 h-3 w-1.5 rounded-full bg-primary1"></span>
        {/* 嘴巴 */}
        <span className="absolute top-12 right-9 border-x-6 border-t-7 border-transparent border-t-primary2"></span>
      </div>
    </div>
  );
};

const pointsCat = (provided, snapshot, className, item) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`flex h-24 items-stretch rounded-full border-4 border-assist2 bg-primary3 text-assist1 ${className}`}
    >
      <div className="flex flex-shrink-0 basis-1/6 items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-assist2 text-3xl leading-none text-assist1">
          {item.points}
        </span>
      </div>
      {/* 身體 */}
      <div className="flex flex-grow items-center justify-center px-4">
        {item.text}
      </div>
      {/* 臉 */}
      <div className="relative flex-shrink-0 basis-20">
        {/* 眼睛1 */}
        <span className="absolute top-1/3 right-1/4 h-3 w-1.5 rounded-full bg-primary1"></span>
        {/* 眼睛2 */}
        <span className="absolute top-1/3 right-3/4 h-3 w-1.5 rounded-full bg-primary1"></span>
        {/* 嘴巴 */}
        <span className="absolute top-12 right-9 border-x-6 border-t-7 border-transparent border-t-primary2"></span>
      </div>
    </div>
  );
};

const meetingItem = (provided, snapshot, className, item) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`flex h-18 w-56 items-center justify-center rounded-full bg-primary3 text-base leading-none text-assist1 sm:text-2xl ${className}`}
    >
      {item.title}
    </div>
  );
};

export const DraggableCard = ({ id, index, item, className }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        if (item.type === 'purple') {
          return purpleCat(provided, snapshot, className, item.text);
        } else if (item.type === 'yellow') {
          return yellowCat(provided, snapshot, className, item.text);
        } else if (item.type.includes('dropped')) {
          return droppedCat(provided, snapshot, className, item.text);
        } else if (item.type === 'points') {
          return pointsCat(provided, snapshot, className, item);
        } else if (item.type === 'meeting') {
          return meetingItem(provided, snapshot, className, item);
        }
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="h-24 bg-transparent"
          ></div>
        );
      }}
    </Draggable>
  );
};
