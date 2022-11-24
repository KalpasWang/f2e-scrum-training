import { Button } from '../Common';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const GroupChatStage = ({ stageData, onComplete }) => {
  const lastActiveRole = useRef();
  const { roles, active } = stageData;
  const spacers = roles.slice();
  spacers.splice(2, 0, null);

  useEffect(() => {
    lastActiveRole.current = active.role;
  });

  const variants = {
    hidden: { y: 0, opacity: 0, transition: { duration: 0.2 } },
    show: { y: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } },
    showAndUp: {
      y: [0, 0, -30],
      opacity: [0, 1, 1],
      transition: {
        delay: 1,
        duration: 1,
        times: [0, 0.5, 1],
      },
    },
    up: { y: -30, opacity: 1, transition: { delay: 1, duration: 0.5 } },
    down: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
    dialogFirstShow: { opacity: 1, transition: { delay: 2.5, duration: 0.5 } },
    dialogShow: {
      opacity: [0, 1],
      transition: { delay: 2, duration: 0.5, times: [0, 0.5] },
    },
  };

  return (
    <div className="h-full">
      <div className="relative min-h-max h-[60vh]">
        <div className="bg-assist1 rounded-3xl h-2/3 relative"></div>
        <div className="absolute inset-0 pt-[6vh] flex flex-col justify-start items-center">
          {/* 對話框 */}
          <AnimatePresence>
            <motion.div
              key={active.role}
              initial="hidden"
              animate={
                lastActiveRole.current ? 'dialogShow' : 'dialogFirstShow'
              }
              exit="hidden"
              variants={variants}
              className={`relative z-10 w-4/5 min-w-72 mx-auto rounded-3xl bg-assist1 border-3 border-${active.color} flex gap-4 px-6 py-8`}
            >
              <p
                className="flex-grow text-assist2"
                dangerouslySetInnerHTML={{ __html: active.text }}
              ></p>
              <Button type="next" onClick={onComplete}></Button>
            </motion.div>
          </AnimatePresence>
          {/* 角色指示線 */}
          <AnimatePresence>
            <motion.div
              key={active.role}
              initial="hidden"
              animate={
                lastActiveRole.current ? 'dialogShow' : 'dialogFirstShow'
              }
              exit="hidden"
              variants={variants}
              className="relative -top-1 w-3/5 min-w-72 mx-auto flex justify-between"
            >
              {spacers.map((role, i) => {
                return (
                  <div
                    key={role?.id || i}
                    className={role ? 'basis-1/12' : 'basis-2/3'}
                  >
                    {active.role === role?.id && (
                      <img
                        src={require(`../../assets/${role.id}-line.svg`)}
                        alt="indicator"
                        className="max-w-full"
                      />
                    )}
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-evenly items-end">
            {roles.map((role) => {
              const img = require('../../assets/' + role.img);
              const initial = lastActiveRole.current ? false : 'hidden';
              let animate;
              if (lastActiveRole.current === role.id) {
                animate = 'down';
              } else if (active.role === role.id && !lastActiveRole.current) {
                animate = 'showAndUp';
              } else if (active.role === role.id) {
                animate = 'up';
              } else {
                animate = 'show';
              }
              return (
                <motion.div
                  initial={initial}
                  animate={animate}
                  variants={variants}
                  key={role.id}
                  className="basis-1/6"
                >
                  <img src={img} alt={role.name} />
                  <p className="text-center text-xl text-assist1 pt-6">
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
