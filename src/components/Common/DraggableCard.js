import { Draggable } from 'react-beautiful-dnd';
import dragIcon from '../../assets/drag-icon.svg';

// type = {'dark', 'light', 'dropped-dark','dropped-light', 'points', 'empty'}

const darkItem = (provided, snapshot, className, children) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="relative"
    >
      {/* 耳朵外框1 */}
      <span className="absolute left-2 -top-1/4 border-x-26 border-b-44 border-transparent border-b-assist2"></span>
      {/* 耳朵外框2 */}
      <span className="absolute left-12 -top-1/4 border-x-26 border-b-44 border-transparent border-b-assist2"></span>
      {/* 貓主體 */}
      <div
        className={`relative z-10 h-24 bg-primary1 text-assist2 border-4 border-assist2 rounded-full flex items-stretch ${className}`}
      >
        {/* 耳朵1 */}
        <span className="absolute left-2 -top-1/4 border-x-22 border-b-44 border-transparent border-b-primary1"></span>
        {/* 耳朵2 */}
        <span className="absolute left-12 -top-1/4 border-x-22 border-b-44 border-transparent border-b-primary1"></span>
        {/* 臉 */}
        <div className="relative basis-20 flex-shrink-0">
          {/* 眼睛1 */}
          <span className="w-1.5 h-3 rounded-full bg-assist2 absolute top-1/4 left-1/4"></span>
          {/* 眼睛2 */}
          <span className="w-1.5 h-3 rounded-full bg-assist2 absolute top-1/4 left-3/4"></span>
          {/* 嘴巴 */}
          <span className="border-x-6 border-t-7 border-transparent border-t-primary3 absolute top-1/2 left-9"></span>
        </div>
        {/* 身體 */}
        <div className="px-4 flex-grow flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

const lightItem = (provided, snapshot, className, children) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="relative"
    >
      {/* 耳朵外框1 */}
      <span className="absolute right-2 -top-1/4 border-x-26 border-b-44 border-transparent border-b-assist2"></span>
      {/* 耳朵外框2 */}
      <span className="absolute right-12 -top-1/4 border-x-26 border-b-44 border-transparent border-b-assist2"></span>
      {/* 貓主體 */}
      <div
        className={`relative z-10 h-24 bg-primary3 text-assist1 border-4 border-assist2 rounded-full flex items-stretch ${className}`}
      >
        {/* 耳朵1 */}
        <span className="absolute right-2 -top-1/4 border-x-22 border-b-44 border-transparent border-b-primary3"></span>
        {/* 耳朵2 */}
        <span className="absolute right-12 -top-1/4 border-x-22 border-b-44 border-transparent border-b-primary3"></span>
        {/* 身體 */}
        <div className="px-4 flex-grow flex justify-center items-center">
          {children}
        </div>
        {/* 臉 */}
        <div className="relative basis-20 flex-shrink-0">
          {/* 眼睛1 */}
          <span className="w-1.5 h-3 rounded-full bg-primary1 absolute top-1/4 right-1/4"></span>
          {/* 眼睛2 */}
          <span className="w-1.5 h-3 rounded-full bg-primary1 absolute top-1/4 right-3/4"></span>
          {/* 嘴巴 */}
          <span className="border-x-6 border-t-7 border-transparent border-t-primary2 absolute top-1/2 right-9"></span>
        </div>
      </div>
    </div>
  );
};

const droppedItem = (provided, snapshot, className, children) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`h-24 bg-primary3 text-assist1 border-4 border-assist2 rounded-full flex items-stretch ${className}`}
    >
      <div className="basis-1/6 flex-shrink-0 flex justify-center items-center">
        <img src={dragIcon} alt="drag" />
      </div>
      {/* 身體 */}
      <div className="px-4 flex-grow flex justify-center items-center">
        {children}
      </div>
      {/* 臉 */}
      <div className="relative basis-20 flex-shrink-0">
        {/* 眼睛1 */}
        <span className="w-1.5 h-3 rounded-full bg-primary1 absolute top-1/3 right-1/4"></span>
        {/* 眼睛2 */}
        <span className="w-1.5 h-3 rounded-full bg-primary1 absolute top-1/3 right-3/4"></span>
        {/* 嘴巴 */}
        <span className="border-x-6 border-t-7 border-transparent border-t-primary2 absolute top-12 right-9"></span>
      </div>
    </div>
  );
};

const pointsItem = (provided, snapshot, className, item) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`h-24 bg-primary3 text-assist1 border-4 border-assist2 rounded-full flex items-stretch ${className}`}
    >
      <div className="basis-1/6 flex-shrink-0 flex justify-center items-center">
        <span className="w-12 h-12 bg-assist2 rounded-full text-assist1 text-3xl leading-none flex justify-center items-center">
          {item.points}
        </span>
      </div>
      {/* 身體 */}
      <div className="px-4 flex-grow flex justify-center items-center">
        {item.text}
      </div>
      {/* 臉 */}
      <div className="relative basis-20 flex-shrink-0">
        {/* 眼睛1 */}
        <span className="w-1.5 h-3 rounded-full bg-primary1 absolute top-1/3 right-1/4"></span>
        {/* 眼睛2 */}
        <span className="w-1.5 h-3 rounded-full bg-primary1 absolute top-1/3 right-3/4"></span>
        {/* 嘴巴 */}
        <span className="border-x-6 border-t-7 border-transparent border-t-primary2 absolute top-12 right-9"></span>
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
      className={`w-56 h-18 bg-primary3 text-assist1 text-base sm:text-2xl leading-none rounded-full flex justify-center items-center ${className}`}
    >
      {item.title}
    </div>
  );
};

export const DraggableCard = ({ id, index, item, className }) => {
  return (
    <Draggable
      draggableId={id}
      index={index}
      isDragDisabled={item.type === 'empty'}
    >
      {(provided, snapshot) => {
        if (item.type === 'dark') {
          return darkItem(provided, snapshot, className, item.text);
        } else if (item.type === 'light') {
          return lightItem(provided, snapshot, className, item.text);
        } else if (item.type.includes('dropped')) {
          return droppedItem(provided, snapshot, className, item.text);
        } else if (item.type === 'points') {
          return pointsItem(provided, snapshot, className, item);
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
