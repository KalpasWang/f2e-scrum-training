import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Common';
import { ChatRole, GroupChatData } from '../../shared/types';

type Props = {
  stageData: GroupChatData;
  onComplete: () => void;
};

export const GroupChatStage = ({ stageData, onComplete }: Props) => {
  const [lastActiveRole, setLastActiveRole] = useState<ChatRole>();
  const { roles, active } = stageData;
  const border = {
    primary1: 'border-primary1',
    primary2: 'border-primary2',
    primary3: 'border-primary3',
  };
  // const spacers: (ChatRole | null)[] = roles.slice();
  const activeRole = roles[active.roleIdx];

  // spacers.splice(2, 0, null);

  useEffect(() => {
    if (lastActiveRole?.id !== activeRole.id) {
      setLastActiveRole(activeRole);
    }
  });

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }, [lastActiveRole]);

  const variants = {
    hidden: { opacity: 0, transition: { duration: 0.2 } },
    show: { opacity: 1, transition: { delay: 0.5, duration: 0.25 } },
    showAndUp: {
      y: [0, 0, -30],
      opacity: [0, 1, 1],
      transition: {
        delay: 0.5,
        duration: 0.75,
        times: [0, 0.25, 0.75],
      },
    },
    up: { y: -30, opacity: 1, transition: { duration: 0.5 } },
    down: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    dialogFirstShow: { opacity: 1, transition: { delay: 1.5, duration: 0.5 } },
    dialogShow: {
      opacity: [0, 1],
      transition: { delay: 0.75, duration: 0.5, times: [0, 0.5] },
    },
  };

  return (
    <div className="h-full">
      <div className="h-screen-[calc(100vh-160px)] relative mt-10 min-h-[32rem]">
        <div className="relative h-2/3 rounded-3xl bg-assist1"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
          {/* 對話框 */}
          <AnimatePresence>
            <motion.div
              key={activeRole.id}
              initial="hidden"
              exit={{ display: 'none' }}
              animate={lastActiveRole ? 'dialogShow' : 'dialogFirstShow'}
              variants={variants}
              className={`relative z-10 mx-auto w-[calc(100%-32px)] min-w-72 basis-1/3 rounded-3xl border-3 bg-assist1 md:w-4/5 ${
                border[activeRole.color]
              } flex flex-col gap-4 p-4 sm:flex-row md:px-6 md:py-8`}
            >
              <p
                className="flex-grow text-assist2"
                dangerouslySetInnerHTML={{ __html: active.text }}
              ></p>
              <Button
                type="next"
                color={activeRole.color}
                size="sm"
                onClick={onComplete}
              />
            </motion.div>
          </AnimatePresence>
          {/* 角色指示線 */}
          <AnimatePresence>
            <motion.div
              key={activeRole.id}
              initial="hidden"
              exit={{ display: 'none' }}
              animate={lastActiveRole ? 'dialogShow' : 'dialogFirstShow'}
              variants={variants}
              className="relative -top-1 mx-auto flex h-1/5 w-3/5 min-w-72 flex-shrink basis-1/5 justify-between lg:h-1/4 lg:basis-1/4"
            >
              {roles.map((role) => {
                return (
                  <div key={role.id} className="basis-1/4">
                    {activeRole.id === role?.id && (
                      <img
                        src={require(`../../assets/${role.id}-line.svg`)}
                        alt="indicator"
                        className="mx-auto max-h-full max-w-full"
                      />
                    )}
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
          <div className="flex min-h-[10rem] w-full basis-1/5 items-end justify-around sm:basis-1/3 md:w-3/4">
            {roles.map((role) => {
              const initial = lastActiveRole ? 'show' : 'hidden';
              let animate = 'show';
              if (lastActiveRole?.id === role.id) {
                animate = 'down';
              }
              if (activeRole.id === role.id && !lastActiveRole) {
                animate = 'showAndUp';
              }
              if (activeRole.id === role.id) {
                animate = 'up';
              }

              return (
                <motion.div
                  initial={initial}
                  animate={animate}
                  variants={variants}
                  key={role.id}
                  className="inline-flex h-full w-1/4 flex-col justify-end md:w-1/5"
                >
                  <img
                    src={require('../../assets/' + role.img)}
                    alt={role.name}
                    className="mx-auto max-h-[calc(100%-2rem)] max-w-full"
                  />
                  <p className="pt-2 text-center text-lg text-assist1 lg:text-xl">
                    {role.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
