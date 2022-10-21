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
  const renderTexts = texts.split('\n').map((p, i) => {
    return (
      <p key={i} className="mb-4">
        {p}
      </p>
    );
  });

  return (
    <main className="h-full w-full border-2 border-gray-700 max-w-3xl py-2 px-5">
      <div className="h-full mx-auto flex flex-col justify-around items-center gap-4">
        <div>{renderTexts}</div>
        <Button onClick={onComplete}>接受挑戰</Button>
      </div>
    </main>
  );
};
