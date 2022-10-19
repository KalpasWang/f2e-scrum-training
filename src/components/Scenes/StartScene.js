import { Button } from '../Common';

export const StartScene = ({ onComplete }) => {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <Button onClick={onComplete}>Start</Button>
    </main>
  );
};
