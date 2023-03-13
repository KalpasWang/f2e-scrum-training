import { Button } from '../Common';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const GroupChatStage = ({ stageData, onComplete }) => {
  const lastActiveRole = useRef();
  const { roles, active } = stageData;
  const border = {
    primary1: 'border-primary1',
    primary2: 'border-primary2',
    primary3: 'border-primary3',
  };
  const spacers = roles.slice();

  spacers.splice(2, 0, null);

  useEffect(() => {
    lastActiveRole.current = active.role;
  });

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
      <div className="h-screen-160 relative mt-10">
        <div className="relative h-2/3 rounded-3xl bg-assist1"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end py-4">
          {/* 對話框 */}
          <AnimatePresence>
            <motion.div
              key={active.role}
              initial="hidden"
              exit={{ display: 'none' }}
              animate={
                lastActiveRole.current ? 'dialogShow' : 'dialogFirstShow'
              }
              variants={variants}
              className={`relative z-10 mx-auto w-4/5 min-w-72 basis-1/3 rounded-3xl border-3 bg-assist1 ${
                border[active.color]
              } flex flex-col gap-4 px-6 py-8 sm:flex-row`}
            >
              <p
                className="flex-grow text-assist2"
                dangerouslySetInnerHTML={{ __html: active.text }}
              ></p>
              <Button
                type="next"
                color={active.color}
                size="sm"
                onClick={onComplete}
              />
            </motion.div>
          </AnimatePresence>
          {/* 角色指示線 */}
          <AnimatePresence>
            <motion.div
              key={active.role}
              initial="hidden"
              exit={{ display: 'none' }}
              animate={
                lastActiveRole.current ? 'dialogShow' : 'dialogFirstShow'
              }
              variants={variants}
              className="relative -top-1 mx-auto flex h-1/5 w-3/5 min-w-72 flex-shrink basis-1/5 justify-between lg:h-1/4 lg:basis-1/4"
            >
              {spacers.map((role, i) => {
                return (
                  <div
                    key={role?.id || i}
                    className={
                      role
                        ? 'basis-1/6 lg:basis-1/12'
                        : 'basis-1/3 lg:basis-2/3'
                    }
                  >
                    {active.role === role?.id && (
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
          <div className="flex min-h-[10rem] basis-1/5 items-end justify-evenly sm:basis-1/3">
            {roles.map((role) => {
              const img = require('../../assets/' + role.img);
              const initial = lastActiveRole.current ? 'show' : 'hidden';
              let animate = 'show';
              if (lastActiveRole.current === role.id) {
                animate = 'down';
              }
              if (active.role === role.id && !lastActiveRole.current) {
                animate = 'showAndUp';
              }
              if (active.role === role.id) {
                animate = 'up';
              }

              return (
                <motion.div
                  initial={initial}
                  animate={animate}
                  variants={variants}
                  key={role.id}
                  className="inline-flex h-full w-1/6 basis-1/6 flex-col justify-end"
                >
                  <img
                    src={img}
                    alt={role.name}
                    className="mx-auto max-h-full max-w-full"
                  />
                  <p className="pt-[2vh] text-center text-lg text-assist1 lg:text-xl">
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
