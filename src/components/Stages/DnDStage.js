import { Button } from '../Common';

export const DnDStage = ({ onComplete }) => {
  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-center">DnDStage</h1>
      <Button onClick={onComplete}>接受挑戰</Button>
    </main>
  );
};
