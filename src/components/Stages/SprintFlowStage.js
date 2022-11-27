import { useReducer, useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Button, SprintFlowBox, Message } from '../Common';
import rd1 from '../../assets/avatar-rd1.png';

function dndReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { item, droppableId } = action.payload;
      state[droppableId].item = item;
      return { ...state };
    }
    case 'remove': {
      const { droppableId } = action.payload;
      state[droppableId].item = null;
      return { ...state };
    }
    case 'showAnswer': {
      state.items.forEach((item, i) => {
        state['space0' + (i + 1)].item = item;
      });
      return { ...state };
    }
    default:
      return state;
  }
}

export const SprintFlowStage = ({ stageData, onComplete }) => {
  const { candidates, flow, items } = stageData;
  const [dndState, dispatch] = useReducer(dndReducer, {
    ...candidates,
    ...flow,
    items,
  });
  const [btnState, setBtnState] = useState('disabled');
  const [showResult, setShowResult] = useState(false);
  const [message, setMessage] = useState(stageData.successMessage);

  function handleDragEnd({ source, destination }) {
    // 排除拖移到非 Droppable 與 沒有移動的情形
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceItem = dndState[source.droppableId].item;
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

  function checkAnswer() {
    const spaces = ['space01', 'space02', 'space03', 'space04'];
    const isCorrect = spaces.every(
      (space) => dndState[space].answer === dndState[space].item.order
    );
    if (!isCorrect) {
      dispatch({ type: 'showAnswer' });
      setMessage(stageData.failMessage);
    }
    setShowResult(true);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const spaces = ['space01', 'space02', 'space03', 'space04'];
    const isAllFilled = spaces.every((space) => dndState[space].item);
    if (!isAllFilled && btnState === 'default') {
      setBtnState('disabled');
    } else if (isAllFilled && btnState === 'disabled') {
      setBtnState('default');
    }
  }, [dndState, btnState, stageData]);

  return (
    <div className="h-full pb-28">
      <div className="mt-12 bg-assist1 rounded-4xl px-4 xl:px-10 pt-12 pb-10">
        <DragDropContext onDragEnd={handleDragEnd}>
          {showResult && (
            <div className="flex justify-start items-center">
              <img className="mr-4" src={rd1} alt="role" />
              <svg
                width="44"
                height="8"
                viewBox="0 0 44 8"
                fill="none"
                className="-translate-y-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2C8.51163 5.01849 25.6279 9.24439 42 2"
                  stroke="#5137FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <Message
                borderColor="primary1"
                text={message}
                className="-translate-y-6"
              />
            </div>
          )}
          {!showResult && (
            <div className="relative w-fit mx-auto p-4 mt-12 mb-10 border-3 border-primary3 border-dashed rounded-3xl xl:rounded-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
              <SprintFlowBox space={dndState.candidate01} />
              <SprintFlowBox space={dndState.candidate02} />
              <SprintFlowBox space={dndState.candidate03} />
              <SprintFlowBox space={dndState.candidate04} />
            </div>
          )}
          <div className="overflow-auto">
            <div className="relative w-fit">
              <svg
                width="1140"
                height="400"
                viewBox="0 0 1140 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="sprint_map">
                  <g id="Group 6">
                    <circle
                      id="Ellipse 23"
                      cx="746"
                      cy="130"
                      r="118"
                      stroke="#FF60FA"
                      strokeWidth="16"
                    />
                    <rect
                      id="Rectangle 29"
                      x="838"
                      y="94"
                      width="42"
                      height="72"
                      fill="#2B2B2B"
                    />
                    <path
                      id="Vector 18"
                      d="M716 217H679L684 227L711.5 235.5L716 217Z"
                      fill="#FF60FA"
                      stroke="#FF60FA"
                    />
                  </g>
                  <path
                    id="Subtract"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M567.598 380H1092C1118.51 380 1140 358.51 1140 332C1140 305.49 1118.51 284 1092 284H672.737C651.352 327.982 613.696 362.591 567.598 380Z"
                    fill="#5137FF"
                  />
                  <g id="Union" filter="url(#filter0_d_55_659)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M376.954 68.6245C352.522 91.5078 334.956 120.749 326.228 153.061L326 153L326.166 153.293L326.134 153.413L326.252 153.444L360 213L418.656 178.204L418.863 178.259C418.882 178.189 418.901 178.118 418.92 178.048L419 178L418.937 177.983C423.021 162.949 431.205 149.344 442.579 138.691C454.022 127.974 468.236 120.673 483.613 117.614C498.99 114.555 514.916 115.861 529.589 121.384C544.263 126.907 557.098 136.426 566.642 148.864C576.186 161.303 582.059 176.164 583.596 191.767C585.133 207.369 582.272 223.091 575.338 237.152C568.403 251.214 557.672 263.054 544.358 271.333C531.044 279.612 515.679 284 500 284L68 284C41.4903 284 20 305.49 20 332C20 358.51 41.4903 380 68 380H500H503V379.975C535.554 379.433 567.372 370.069 595.053 352.856C623.583 335.115 646.578 309.744 661.438 279.612C676.297 249.48 682.427 215.792 679.134 182.357C675.841 148.922 663.256 117.077 642.804 90.423C622.352 63.7693 594.849 43.3713 563.405 31.537C531.962 19.7027 497.835 16.9044 464.884 23.4587C431.933 30.013 401.475 45.6583 376.954 68.6245Z"
                      fill="#5137FF"
                    />
                  </g>
                  <circle
                    id="Ellipse 22"
                    cx="500"
                    cy="200"
                    r="72"
                    fill="#FF60FA"
                  />
                  <path
                    id="Sprint"
                    d="M456 189.333H458.667V186.667H469.333V189.333H472V192H469.333V189.333H458.667V197.333H469.333V200H472V208H469.333V210.667H458.667V208H456V205.333H458.667V208H469.333V200H458.667V197.333H456V189.333ZM474.656 218.667V194.667H485.323V197.333H487.99V208H485.323V210.667H477.323V218.667H474.656ZM477.323 208H485.323V197.333H477.323V208ZM493.323 210.667H490.656V194.667H493.323V197.333H495.99V194.667H501.323V197.333H495.99V200H493.323V210.667ZM506.667 189.333V186.667H509.333V189.333H506.667ZM509.333 210.667H506.667V194.667H509.333V210.667ZM517.323 210.667H514.656V194.667H517.323V197.333H519.99V194.667H525.323V197.333H527.99V210.667H525.323V197.333H519.99V200H517.323V210.667ZM530.656 194.667H533.323V186.667H535.99V194.667H541.323V197.333H535.99V208H541.323V210.667H535.99V208H533.323V197.333H530.656V194.667Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_55_659"
                    x="0"
                    y="0"
                    width="700.001"
                    height="400"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.168627 0 0 0 0 0.168627 0 0 0 0 0.168627 0 0 0 0.45 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_55_659"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_55_659"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <SprintFlowBox
                key={dndState.space01.id}
                space={dndState.space01}
                className="bg-primary1 absolute top-[74.5%] left-[18%]"
              />
              <SprintFlowBox
                key={dndState.space02.id}
                space={dndState.space02}
                className="bg-assist1 absolute top-[23.5%] left-[63%]"
              />
              <SprintFlowBox
                key={dndState.space03.id}
                space={dndState.space03}
                className="bg-primary1 absolute top-[74.5%] left-[58%]"
              />
              <SprintFlowBox
                key={dndState.space04.id}
                space={dndState.space04}
                className="bg-primary1 absolute top-[74.5%] left-[79%]"
              />
            </div>
          </div>
          <div className="text-center pt-12">
            {showResult && (
              <Button type="default" onClick={onComplete}>
                {stageData.action2}
              </Button>
            )}
            {!showResult && (
              <Button type={btnState} onClick={checkAnswer}>
                {stageData.action}
              </Button>
            )}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};
