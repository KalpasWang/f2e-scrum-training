import { useEffect, useReducer, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Button } from '../Common';
import { DroppableBox } from '../Common';

function dndReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { item, droppableId, index } = action.payload;
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

export const SprintListDnDStage = ({ stageData, onComplete }) => {
  const { backlog, sprint } = stageData;
  const [dndState, dispatch] = useReducer(dndReducer, {
    sprint,
    backlog,
  });
  const [btnState, setBtnState] = useState({
    type: 'default',
    text: stageData.action,
  });
  const [currentPoints, setCurrentPoints] = useState(0);

  function handleDragEnd({ source, destination }) {
    // 排除拖移到非 Droppable 與 沒有移動的情形
    if (!destination) return;
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
    const total = dndState.sprint.items.reduce(
      (accu, item) => (accu += item.points),
      0
    );
    setCurrentPoints(total);
  }, [dndState]);

  useEffect(() => {
    if (currentPoints > stageData.maxPoints && btnState.type === 'default') {
      setBtnState({ type: 'disabled', text: stageData.exceed });
    } else if (
      currentPoints <= stageData.maxPoints &&
      btnState.type === 'disabled'
    ) {
      setBtnState({ type: 'default', text: stageData.action });
    }
  }, [currentPoints, btnState, stageData]);

  return (
    <div className="h-full">
      <h3 className="mt-6 mb-8 text-center text-2xl text-assist1">
        {stageData.title}
      </h3>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="relative flex h-full w-full flex-col items-stretch justify-between gap-4 lg:flex-row">
          {/* 產品代辦清單 Product Backlog */}
          <div className="flex w-full flex-col rounded-5xl bg-assist1 px-6 py-8 xl:basis-5/12">
            <h2 className="mb-4 text-center text-3xl text-assist2">
              {dndState.backlog.title}
            </h2>
            <p className="mb-4 text-center text-2xl text-assist2">
              共
              <span className="px-1 text-primary2">
                {stageData.totalPoints}
              </span>
              點
            </p>
            <div className="relative flex w-full flex-grow flex-col items-stretch gap-4">
              {[1, 2, 3, 4].map((_, i) => {
                return (
                  <div
                    key={i}
                    className="flex h-24 items-center justify-center rounded-full border-3 border-dashed border-primary3 text-2xl text-primary3"
                  >
                    代辦清單
                  </div>
                );
              })}
              <DroppableBox
                id={dndState.backlog.id}
                items={dndState.backlog.items}
                className="absolute inset-0 gap-4"
              />
            </div>
          </div>
          {/* 開發騎士的短衝代辦清單 */}
          <div className="flex w-full flex-col rounded-5xl bg-assist1 px-6 py-8 xl:basis-5/12">
            <h2 className="mb-4 text-center text-3xl text-assist2">
              {dndState.sprint.title}
            </h2>
            <p className="mb-4 text-center text-2xl text-assist2">
              <span className="text-primary2">{currentPoints}</span> 點 /{' '}
              {stageData.limit}
            </p>
            <div className="relative flex w-full flex-grow flex-col items-stretch gap-4">
              {[1, 2, 3, 4].map((_, i) => {
                return (
                  <div
                    key={i}
                    className="flex h-24 items-center justify-center rounded-full border-3 border-dashed border-primary3 text-primary3"
                  ></div>
                );
              })}
              <DroppableBox
                id={dndState.sprint.id}
                items={dndState.sprint.items}
                className="absolute inset-0 gap-4"
              />
            </div>
          </div>
        </div>
      </DragDropContext>
      <div className="pt-14 pb-8 text-center">
        <Button type={btnState.type} onClick={onComplete}>
          {btnState.text}
        </Button>
      </div>
    </div>
  );
};
