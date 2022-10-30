import classNames from 'classnames';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../shared/items';

export const DraggableCard2 = ({ children, id }) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: ItemTypes.CARD,
      id,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  cardStyles = classNames(
    'bg-white',
    'p-4',
    'border border-slate-400',
    isDragging ? 'opacity-75' : null
  );

  return (
    <div ref={dragRef} className={cardStyles}>
      {children}
    </div>
  );
};
