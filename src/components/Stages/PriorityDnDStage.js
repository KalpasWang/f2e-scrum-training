import { useEffect, useReducer, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';
import { Button } from '../Common';
import { DroppableBox } from '../Common';
import { Message } from '../Common/Message';
import poSit from '../../assets/poSit.svg';

function dndReducer(state, action) {
  switch (action.type) {
    case 'add/remove': {
      const { item, droppableId, index } = action.payload;
      if (!item) return state;
      if (
        item.type !== 'empty' &&
        !item.type.includes('dropped-') &&
        droppableId === 'backlog'
      ) {
        item.type = 'dropped-' + item.type;
      } else if (
        item.type !== 'empty' &&
        item.type.includes('dropped-') &&
        droppableId === 'candidates'
      ) {
        item.type = item.type.split('-')[1];
      }
      state[droppableId].items.splice(index, 1, item);
      return { ...state };
    }
    default:
      return state;
  }
}

export const PriorityDnDStage = ({ stageData, onComplete }) => {
  const { candidates, backlog } = stageData;
  const [dndState, dispatch] = useReducer(dndReducer, {
    candidates,
    backlog,
  });
  const [btnState, setBtnState] = useState('disabled');

  function handleDragEnd({ draggableId, source, destination }) {
    // 排除拖移到非 Droppable 與 沒有移動的情形
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceItem = dndState[source.droppableId].items[source.index];
    const targetItem =
      dndState[destination.droppableId].items[destination.index];

    dispatch({
      type: 'add/remove',
      payload: {
        ...source,
        item: targetItem,
      },
    });
    dispatch({
      type: 'add/remove',
      payload: {
        ...destination,
        item: sourceItem,
      },
    });
  }

  useEffect(() => {
    const isSet = dndState.backlog.items.every(
      (item, i) => item.type !== 'empty'
    );
    if (isSet && btnState === 'disabled') {
      setBtnState('default');
    } else if (!isSet && btnState === 'default') {
      setBtnState('disabled');
    }
  }, [dndState, btnState]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="flex justify-start items-center px-8 relative z-10"
      >
        <img
          key={stageData.roleImg}
          className="basis-1/4 lg:basis-auto mr-4 max-w-[25%] lg:max-w-none"
          src={poSit}
          alt="role"
        />
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          width="44"
          height="8"
          viewBox="0 0 44 8"
          fill="none"
          className="-translate-y-6 basis-1/12 lg:basis-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2C8.51163 5.01849 25.6279 9.24439 42 2"
            stroke="#FF60FA"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.svg>
        <Message
          borderColor={stageData.messageColor}
          color={stageData.messageColor}
          text={stageData.message}
          delay={1.5}
          img={stageData.messageImg}
          className="-translate-y-6 basis-2/3"
        />
      </motion.div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="relative md:-top-16 h-full w-full flex flex-col lg:flex-row gap-4 justify-between items-stretch">
          <div className="xl:basis-5/12 w-full px-6 pb-8 pt-28 bg-assist1 rounded-5xl">
            <DroppableBox
              id="candidates"
              items={dndState.candidates.items}
              className="gap-7"
            />
          </div>
          <div className="xl:basis-5/12 w-full flex flex-col px-6 py-8 bg-assist1 rounded-5xl">
            <h1 className="text-3xl text-assist2 text-center mb-4">
              {dndState.backlog.title}
            </h1>
            <div className="flex-grow w-full relative flex flex-col items-stretch gap-4">
              {dndState.backlog.placeholders.map((p, i) => {
                return (
                  <div
                    key={p}
                    className="border-3 border-primary3 border-dashed rounded-full h-24 flex justify-center items-center text-primary3"
                  >
                    {p}
                  </div>
                );
              })}
              <DroppableBox
                id="backlog"
                items={dndState.backlog.items}
                className="gap-4 absolute inset-0"
              />
            </div>
          </div>
        </div>
      </DragDropContext>
      <div className="text-center pt-3 pb-8">
        <Button type={btnState} onClick={onComplete}>
          {stageData.action}
        </Button>
      </div>
    </div>
  );
};
