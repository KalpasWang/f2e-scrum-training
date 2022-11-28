import { motion } from 'framer-motion';
import { Button, Message } from '../Common';
import avatarRD1 from '../../assets/avatar-rd1.png';
import avatarRD2 from '../../assets/avatar-rd2.png';
import newbie from '../../assets/avatar-newbie.png';

export const MessagesStage = ({ stageData, onComplete }) => {
  const variants = {
    initial: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom / 1000 },
    }),
  };

  const delay = [1000, 6000, 20000];

  const flexRow = {
    left: 'flex-row',
    right: 'flex-row-reverse',
  };

  const alignSelf = {
    left: 'self-start',
    right: 'self-end',
  };

  const strokes = {
    primary1: 'stroke-primary1',
    primary2: 'stroke-primary2',
    primary3: 'stroke-primary3',
  };

  const margin = {
    left: 'mr-4',
    right: 'ml-4',
  };

  const avatars = {
    avatarRD1,
    avatarRD2,
    newbie,
  };

  return (
    <div className="h-full pt-10 pb-12">
      <div className="min-h-[60vh] bg-assist1 rounded-4xl px-[3vw] py-9 flex flex-col justify-start items-center gap-9">
        {stageData.messages.map((msg, i) => {
          return (
            <motion.div
              initial="initial"
              animate="visible"
              custom={delay[i]}
              variants={variants}
              key={msg.id}
              className={`flex ${flexRow[msg.direction]} ${
                alignSelf[msg.direction]
              } items-center`}
            >
              <img
                className={margin[msg.direction]}
                src={avatars[msg.avatar]}
                alt="role"
              />
              <svg
                width="44"
                height="8"
                viewBox="0 0 44 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2C8.51163 5.01849 25.6279 9.24439 42 2"
                  className={strokes[msg.color]}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <Message
                borderColor={msg.color}
                text={msg.text}
                delay={delay[i]}
                className="max-w-[65%]"
              >
                {msg.action && (
                  <Button type="next" size="sm" onClick={onComplete} />
                )}
              </Message>
            </motion.div>
          );
        })}
        {stageData.action && (
          <motion.div
            initial="initial"
            animate="visible"
            custom={22000}
            variants={variants}
            className="text-center pt-4"
          >
            <Button type="next" onClick={onComplete} />
          </motion.div>
        )}
      </div>
    </div>
  );
};
