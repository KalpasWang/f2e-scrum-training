import { Button } from '../Common';

export const GroupChatStage = ({ onComplete }) => {
  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-center">GroupChatStage</h1>
      <Button onClick={onComplete}>完成了</Button>
    </main>
  );
};
