import { Button } from '../Common';

export const DialogStage = ({ stageData, onComplete }) => {
  let texts = stageData.text || '';
  const renderTexts = texts.split('\n').map((p, i) => {
    if (!p) {
      return (
        <p key={i} className="mb-4">
          &nbsp;
        </p>
      );
    }
    return (
      <p
        key={i}
        dangerouslySetInnerHTML={{ __html: p }}
        className="leading-normal"
      ></p>
    );
  });

  return (
    <div className="h-full">
      <div className="bg-assist1 rounded-4xl px-[7vw] py-16 flex flex-col justify-around items-center gap-[15vh]">
        <div className="w-full text-assist2 text-2xl leading-relaxed">
          {renderTexts}
        </div>
        <Button type={stageData.button} onClick={onComplete}>
          {stageData.action}
        </Button>
      </div>
      {stageData.roleImg && (
        <div className="fixed bottom-0 right-0">
          <img
            src={require(`../../assets/${stageData.roleImg}`)}
            className="w-[30vw]"
            alt="role"
          />
        </div>
      )}
    </div>
  );
};
