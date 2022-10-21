import { useGameContext } from '../../context/gameContext';
import { Button } from '../Common';
import { Message } from '../Common/Message';

export const DnDStage = ({ onComplete }) => {
  const { state } = useGameContext();
  const stageData = state.stages[state.progress];
  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-center">DnDStage</h1>
      <Message
        text={stageData.messages[0].text}
        role={stageData.messages[0].role}
      />
      <Button onClick={onComplete}>接受挑戰</Button>
    </main>
  );
};
