import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Button } from '../Common';
import king from '../../assets/king.svg';
import po from '../../assets/po.svg';
import poHand from '../../assets/poHand.svg';

export const DialogStage = ({ stageData, onComplete }) => {
  const roleImage = {
    king,
    po,
    poHand,
  };
  let texts = stageData.text || '';

  return (
    <div className="h-full pt-10 pb-12">
      <div className="min-h-[60vh] bg-assist1 rounded-4xl px-[7vw] py-9 flex flex-col justify-between items-center gap-6 lg:gap-[5vh]">
        <div className="w-full text-assist2 text-2xl leading-tight">
          <Typewriter
            key={stageData.roleImg}
            onInit={(typewriter) => {
              typewriter.pauseFor(1500).typeString(texts).start();
            }}
            options={{ delay: 60 }}
          />
        </div>
        <Button type={stageData.button} onClick={onComplete}>
          {stageData.action}
        </Button>
      </div>
      {stageData.roleImg &&
        ReactDOM.createPortal(
          <motion.img
            key={stageData.roleImg}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={roleImage[stageData.roleImg]}
            className="w-[25vw] xl:w-[30vw]"
            alt="role"
          />,
          document.getElementById('role')
        )}
    </div>
  );
};
