import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Message } from '../Common';
import avatarRD1 from '../../assets/avatar-rd1.png';
import avatarRD2 from '../../assets/avatar-rd2.png';
import newbie from '../../assets/avatar-newbie.png';
import { AvatarMessage, MessagesData } from '../../shared/types';

function delay(ms: number, fn: () => void) {
  setTimeout(() => {
    fn();
  }, ms);
}

type Props = {
  stageData: MessagesData;
  onComplete: () => void;
};

export const MessagesStage = ({ stageData, onComplete }: Props) => {
  const showRD1 = true;
  const [showRD2, setShowRD2] = useState(false);
  const [showNewbie, setShowNewbie] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const isShowingRoles = [showRD1, showRD2, showNewbie];
  const variants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const callbacks = [
    () => {
      delay(1000, () => setShowRD2(true));
    },
    () => {
      delay(1000, () => setShowNewbie(true));
    },
    () => {
      delay(1000, () => setShowBtn(true));
    },
  ];

  const flexRow = {
    left: 'flex-row',
    right: 'flex-row-reverse',
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

  function getRoleAvatar(role: AvatarMessage['avatar']) {
    switch (role) {
      case 'avatarRD1':
        return avatarRD1;
      case 'avatarRD2':
        return avatarRD2;
      default:
        return newbie;
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  });

  return (
    <div className="h-full pt-10 pb-12">
      <div className="flex min-h-[60vh] flex-col items-center justify-start gap-[5vh] rounded-4xl bg-assist1 px-[3vw] py-[5vh] transition-all">
        {stageData.messages.map((msg, i) => {
          return (
            isShowingRoles[i] && (
              <motion.div
                initial="initial"
                animate="visible"
                variants={variants}
                key={msg.id}
                className={`flex ${flexRow[msg.direction]} w-full items-start`}
              >
                <div
                  className={`basis-1/4 lg:basis-auto ${margin[msg.direction]}`}
                >
                  <img
                    className="mx-auto max-w-full"
                    src={getRoleAvatar(msg.avatar)}
                    alt="role"
                  />
                </div>
                <svg
                  className="mt-8 flex-shrink-0 basis-auto"
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
                  key={msg.id}
                  borderColor={msg.color}
                  text={msg.text}
                  finishCallBack={callbacks[i]}
                  className="min-h-[120px] basis-2/3"
                >
                  {msg.action && (
                    <Button type="next" size="sm" onClick={onComplete} />
                  )}
                </Message>
              </motion.div>
            )
          );
        })}
        {stageData.action && showBtn && (
          <motion.div
            initial="initial"
            animate="visible"
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
