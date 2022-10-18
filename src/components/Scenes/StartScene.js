import { Button } from '../Common';

export const StartScene = ({ onStart }) => {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <Button onClick={onStart}>Start</Button>
    </main>
  );
};
