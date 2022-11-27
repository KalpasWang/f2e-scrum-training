import ReactDOM from 'react-dom';
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
    <div className="h-full pt-10 pb-12">
      <div className="min-h-[60vh] bg-assist1 rounded-4xl px-[7vw] py-9 flex flex-col justify-between items-center gap-52">
        <div className="w-full text-assist2 text-2xl leading-relaxed">
          {renderTexts}
        </div>
        <Button type={stageData.button} onClick={onComplete}>
          {stageData.action}
        </Button>
      </div>
      {stageData.roleImg &&
        ReactDOM.createPortal(
          <img
            src={require(`../../assets/${stageData.roleImg}`)}
            className="w-[25vw] xl:w-[30vw]"
            alt="role"
          />,
          document.getElementById('role')
        )}
    </div>
  );
};
