import React, { useEffect, useReducer, useState } from 'react';
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from 'react-beautiful-dnd';
import { motion } from 'framer-motion';
import { Button, ButtonType, DroppableBox, Message } from '../Common';
import poSit from '../../assets/poSit.svg';
import {
  PrimaryColor,
  PriorityDnDData,
  PriorityItem,
  TextColor,
} from '../../shared/types';

type DnDState = {
  id: string;
  items: PriorityItem[];
};

type State = {
  candidates: DnDState;
  backlog: DnDState & {
    title: string;
    placeholders: string[];
  };
};

type Action =
  | {
      type: 'add';
      payload: {
        index: number;
        droppableId: keyof State;
        item: PriorityItem;
      };
    }
  | {
      type: 'remove';
      payload: {
        index: number;
        droppableId: keyof State;
      };
    };

type Props = {
  stageData: PriorityDnDData;
  onComplete: () => void;
};

type MyDraggableLocation = {
  droppableId: keyof State;
  index: number;
};

function dndReducer(state: State, action: Action) {
  switch (action.type) {
    case 'add': {
      const { item, droppableId, index } = action.payload;
      if (droppableId === 'backlog') {
        item.type =
          item.type === 'purple' ? 'dropped_purple' : 'dropped-yellow';
      } else {
        item.type = item.type === 'dropped_purple' ? 'purple' : 'yellow';
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

export const PriorityDnDStage = ({ stageData, onComplete }: Props) => {
  const { candidates, backlog } = stageData;
  const [dndState, dispatch] = useReducer(dndReducer, {
    candidates,
    backlog,
  });
  const [btnState, setBtnState] = useState<ButtonType>('disabled');

  function isValid(arg: DraggableLocation): arg is MyDraggableLocation {
    const id = arg.droppableId;
    return id === 'candidates' || id === 'backlog';
  }

  function handleDragEnd({ source, destination }: DropResult) {
    if (!destination) return; // 排除拖移到非 Droppable 與 沒有移動的情形
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (!isValid(source)) return;
    if (!isValid(destination)) return;

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
    const isSet = dndState.candidates.items.length === 0;
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
        className="relative z-10 flex flex-col-reverse items-center justify-start px-8 md:flex-row"
      >
        <img
          key={stageData.roleImg}
          className="mr-4 basis-1/2 md:max-w-[25%] md:basis-1/4 lg:max-w-none lg:basis-auto"
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
          className="basis-1/12 -translate-y-6 rotate-90 md:rotate-0 lg:basis-auto"
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
          borderColor={stageData.messageColor as PrimaryColor}
          color={stageData.messageColor as TextColor}
          text={stageData.message}
          delay={1.5}
          img={stageData.messageImg}
          className="basis-2/3 -translate-y-6 bg-assist2"
        />
      </motion.div>
      {/* 拖拉貓貓區塊 */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="relative -top-16 flex h-full w-full flex-col items-stretch justify-between gap-4 lg:flex-row">
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
