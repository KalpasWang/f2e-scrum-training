import { motion } from 'framer-motion';
import { Button, Message } from '../Common';
import avatarRD1 from '../../assets/avatar-rd1.png';
import avatarRD2 from '../../assets/avatar-rd2.png';
import newbie from '../../assets/avatar-newbie.png';
import { useEffect } from 'react';

export const MessagesStage = ({ stageData, onComplete }) => {
  const variants = {
    initial: { opacity: 0, display: 'none' },
    visible: (custom) => ({
      opacity: 1,
      display: 'flex',
      transition: { delay: custom },
    }),
  };

  const delay = [1, 6, 20, 22];

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
    left: 'mr-1 lg:mr-4',
    right: 'ml-1 lg:ml-4',
  };

  const avatars = {
    avatarRD1,
    avatarRD2,
    newbie,
  };

  useEffect(() => {
    const timers = new Array(delay.length);
    delay.forEach((d, i) => {
      timers[i] = setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          left: 0,
          behavior: 'smooth',
        });
      }, d * 1000 + 100);
    });

    return () => {
      timers.forEach((id) => {
        clearTimeout(id);
      });
    };
  });

  return (
    <div className="h-full pt-10 pb-12">
      <div className="flex min-h-[60vh] flex-col items-center justify-start gap-[5vh] rounded-4xl bg-assist1 px-[3vw] py-[5vh]">
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
              } w-full items-center`}
            >
              <div
                className={`basis-1/4 lg:basis-auto ${margin[msg.direction]}`}
              >
                <img
                  className="mx-auto max-w-full"
                  src={avatars[msg.avatar]}
                  alt="role"
                />
              </div>
              <svg
                className="flex-shrink-0 basis-1/12 lg:basis-auto"
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
                className="basis-2/3"
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
            custom={delay[3]}
            variants={variants}
            className="pt-4 text-center"
          >
            <Button type="next" onClick={onComplete} />
          </motion.div>
        )}
      </div>
    </div>
  );
};
