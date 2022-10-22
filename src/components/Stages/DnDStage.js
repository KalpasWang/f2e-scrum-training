import { useGameContext } from '../../context/gameContext';
import { Button } from '../Common';
import { Message } from '../Common/Message';

export const DnDStage = ({ onComplete }) => {
  const { state } = useGameContext();
  const stageData = state.stages[state.progress];

  return (
    <main className="h-full w-full flex flex-row">
      <div className="basis-1/2">
        <Message
          text={stageData.messages[0].text}
          role={stageData.messages[0].role}
          className="mb-6"
        />
      </div>
      <div className="basis-1/2">
        <h1>代辦清單</h1>
        <Button onClick={onComplete}>{stageData.action}</Button>
      </div>
    </main>
  );
};
