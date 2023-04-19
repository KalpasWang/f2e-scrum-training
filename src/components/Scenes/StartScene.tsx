import React, { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import family from '../../assets/family.svg';
import startSound from '../../assets/start.mp3';

export const StartScene = () => {
  const navigate = useNavigate();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container.current?.focus();
  }, []);

  const playSound = useCallback(() => {
    const audio = new Audio(startSound);
    audio.oncanplaythrough = audio.play;
    navigate('training');
  }, [startSound]);

  return (
    <motion.main
      ref={container}
      tabIndex={0}
      className="h-screen cursor-pointer bg-primary3 p-4 lg:p-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0 }}
      onClick={playSound}
      onKeyPress={playSound}
    >
      <div className="relative h-full bg-assist1">
        <div className="absolute -inset-x-2 bottom-[5vh]">
          <img
            src={family}
            alt="角色圖片"
            className="max-h-[80vh] max-w-full"
          />
        </div>
        <motion.div
          className="absolute top-5 right-4 rounded-2xl border-4 border-dashed border-primary3 p-2 lg:top-14 lg:right-12 lg:p-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 1, easings: 'easeOut' },
          }}
        >
          <h2 className="text-center text-xl leading-tight text-assist2 lg:text-6xl">
            F2E<span className="text-primary3">帶你前進</span>
          </h2>
          <h1 className="text-center text-3xl leading-tight text-primary2 lg:text-7xl">
            敏捷騎士團
          </h1>
          <p className="text-center text-xs text-primary3 lg:text-xl">
            Design by 讀書狗狗, Code by Kalpas
          </p>
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2,
              duration: 1,
              repeat: Infinity,
            },
          }}
        >
          <p className="whitespace-nowrap text-xl text-assist2 text-opacity-70 lg:text-3xl">
            點擊任一鍵開始訓練
          </p>
        </motion.div>
      </div>
    </motion.main>
  );
};
