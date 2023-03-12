import { useEffect, useReducer, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';
import { Button } from '../Common';
import { DroppableBox } from '../Common';
import { Message } from '../Common/Message';
import poSit from '../../assets/poSit.svg';

function dndReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { item, droppableId, index } = action.payload;
      if (droppableId === 'backlog') {
        item.type = 'dropped-' + item.type;
      } else {
        item.type = item.type.slice(-6);
      }
      state[droppableId].items.splice(index, 0, item);
      return { ...state };
    }
    case 'remove': {
      const { droppableId, index } = action.payload;
      state[droppableId].items.splice(index, 1);
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

  function handleDragEnd({ source, destination }) {
    if (!destination) return; // 排除拖移到非 Droppable 與 沒有移動的情形
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceItem = dndState[source.droppableId].items[source.index];

    dispatch({
      type: 'remove',
      payload: source,
    });
    dispatch({
      type: 'add',
      payload: {
        ...destination,
        item: sourceItem,
      },
    });
  }

  useEffect(() => {
    let isSet = dndState.candidates.items.length === 0;
    if (isSet && btnState === 'disabled') {
      setBtnState('default');
    } else if (!isSet && btnState === 'default') {
      setBtnState('disabled');
    }
  }, [dndState, btnState]);

  return (
    <div>
      {/* PO 小敏的對話框 */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="relative z-10 flex items-center justify-start px-8"
      >
        <img
          key={stageData.roleImg}
          className="mr-4 max-w-[25%] basis-1/4 lg:max-w-none lg:basis-auto"
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
          className="basis-1/12 -translate-y-6 lg:basis-auto"
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
          className="basis-2/3 -translate-y-6"
        />
      </motion.div>
      {/* 拖拉貓貓區塊 */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="relative flex h-full w-full flex-col items-stretch justify-between gap-4 md:-top-16 lg:flex-row">
          {/* 候選貓貓清單 */}
          <div className="w-full rounded-5xl bg-assist1 px-6 pb-8 pt-16 xl:basis-5/12">
            <DroppableBox
              id="candidates"
              items={dndState.candidates.items}
              className="gap-7"
            />
          </div>
          <div className="flex w-full flex-col rounded-5xl bg-assist1 px-6 py-8 xl:basis-5/12">
            <h1 className="mb-7 text-center text-3xl text-assist2">
              {dndState.backlog.title}
            </h1>
            <div className="relative flex w-full flex-grow flex-col items-stretch gap-4">
              {/* 按照優先度畫空格 */}
              {dndState.backlog.placeholders.map((p) => {
                return (
                  <div
                    key={p}
                    className="flex h-24 items-center justify-center rounded-full border-3 border-dashed border-primary3 text-primary3"
                  >
                    {p}
                  </div>
                );
              })}
              <DroppableBox
                id="backlog"
                items={dndState.backlog.items}
                className="absolute inset-0 gap-4"
              />
            </div>
          </div>
        </div>
      </DragDropContext>
      <div className="pt-3 pb-8 text-center">
        <Button type={btnState} onClick={onComplete}>
          {stageData.action}
        </Button>
      </div>
    </div>
  );
};
