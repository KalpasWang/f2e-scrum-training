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
    <div className="h-full overflow-hidden pt-10 pb-12">
      <div className="flex min-h-[60vh] flex-col items-center justify-between gap-6 rounded-4xl bg-assist1 px-4 py-9 lg:gap-[5vh] lg:px-[7vw]">
        <div className="w-full text-base leading-tight text-assist2 sm:text-xl lg:text-2xl">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={roleImage[stageData.roleImg]}
            className="max-h-[40vh] w-[35vw] sm:w-[30vw]"
            alt="role"
          />,
          document.getElementById('role')
        )}
    </div>
  );
};
