import { Button } from '../Button/Button';

export const StartMenu = ({ onStart }) => {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <Button onClick={onStart}>Start</Button>
    </main>
  );
};
