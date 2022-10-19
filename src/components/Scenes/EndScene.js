import { useGameContext } from '../../context/gameContext';
import { Button } from '../Common';

export const EndScene = ({ onComplete }) => {
  const { companyName } = useGameContext();
  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-center">恭喜完成，歡迎加入{companyName}！</h1>
      <Button onClick={onComplete}>再來一次</Button>
    </main>
  );
};
