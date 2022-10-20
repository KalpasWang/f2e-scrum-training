import { Button } from '../Common';
import { useGameContext } from '../../context/gameContext';

export const DialogStage = ({ onComplete }) => {
  const { state } = useGameContext();
  const stageData = state.stages[state.progress];
  let texts = stageData.text;
  if (stageData.variables) {
    stageData.variables.forEach((val) => {
      const finding = '$' + val;
      const replacement = state[val];
      texts = texts.replaceAll(finding, replacement);
    });
  }
  return (
    <main className="h-full w-full p-4">
      <div className="border-2 border-gray-700 flex flex-col justify-center items-center gap-4">
        <p className="text-center">{texts}</p>
        <Button onClick={onComplete}>接受挑戰</Button>
      </div>
    </main>
  );
};
