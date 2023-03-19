import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import family from '../../assets/family.svg';

export const StartScene = () => {
  const navigate = useNavigate();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container.current?.focus();
  }, []);

  return (
    <motion.main
      ref={container}
      tabIndex={0}
      className="h-screen cursor-pointer bg-primary3 p-4 lg:p-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      onClick={() => {
        navigate('training');
      }}
      onKeyPress={() => {
        navigate('training');
      }}
    >
      <div className="relative h-full bg-assist1">
        <div className="absolute -inset-x-2 bottom-[5vh]">
          <img
            src={family}
            alt="角色圖片"
            className="max-h-[80vh] max-w-full"
          />
        </div>
        <div className="absolute top-5 right-4 rounded-2xl border-4 border-dashed border-primary3 p-2 lg:top-14 lg:right-12 lg:p-5">
          <h2 className="text-center text-xl leading-tight text-assist2 lg:text-6xl">
            F2E<span className="text-primary3">帶你前進</span>
          </h2>
          <h1 className="text-center text-3xl leading-tight text-primary2 lg:text-7xl">
            敏捷騎士團
          </h1>
          <p className="text-center text-xs text-primary3 lg:text-xl">
            Design by 讀書狗狗, Code by Kalpas
          </p>
        </div>
      </div>
    </motion.main>
  );
};
