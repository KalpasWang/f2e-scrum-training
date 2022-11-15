import classNames from 'classnames';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../shared/items';

export const DroppableBox = ({ onDropping, className }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => onDropping(item.id),
    collect: (monitor) => ({
      isOver: +monitor.isOver(),
    }),
  });

  const containerStyle = classNames(
    'bg-white border border-slate-400',
    className
  );

  return <div className={containerStyle} ref={dropRef}></div>;
};
