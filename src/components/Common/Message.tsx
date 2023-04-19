import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { PrimaryColor, TextColor } from '../../shared/types';
import TypingSound from '../../assets/typing.mp3';

type MessageProps = {
  text: string;
  borderColor?: PrimaryColor;
  color?: TextColor;
  img?: string;
  delay?: number;
  className?: string;
  scrolling?: boolean;
  finishCallBack?: () => void;
  children?: React.ReactNode;
};

export const Message = React.memo(function Message({
  text,
  borderColor = 'primary3',
  color = 'assist2',
  img,
  delay = 0.1,
  className = '',
  scrolling = true,
  finishCallBack = () => {
    /* do something */
  },
  children,
}: MessageProps) {
  const container = useRef(null);
  const audio = new Audio(TypingSound);
  audio.loop = true;
  audio.volume = 0.5;

  const borderStyle = {
    primary1: 'border-primary1',
    primary2: 'border-primary2',
    primary3: 'border-primary3',
  };

  const textColor = {
    assist2: 'text-assist2',
    primary2: 'text-primary2',
  };

  useEffect(() => {
    if (!container.current) return;
    if (!scrolling) return;
    const observer = new ResizeObserver((entries) => {
      const element = entries[0].target;
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    });
    observer.observe(container.current);
    return () => {
      if (container.current && scrolling) {
        observer.unobserve(container.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay }}
      className={`flex flex-col items-center gap-1 rounded-3xl border-3 py-2 px-2 transition-all sm:flex-row sm:gap-4 sm:py-3 sm:px-6 ${borderStyle[borderColor]} ${className}`}
    >
      <div className="relative flex-grow">
        <div className={`${textColor[color]} min-h-[3rem] w-full`}>
          <Typewriter
            key={text}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(delay * 1000)
                .callFunction(() => {
                  audio.play();
                  console.log('typing');
                })
                .typeString(text)
                .start()
                .callFunction(() => {
                  audio.pause();
                  console.log('end');
                })
                .callFunction(finishCallBack);
            }}
            options={{
              delay: 70,
            }}
          />
        </div>
      </div>
      {img && (
        <div className="flex-shrink-0 basis-1/4 lg:basis-1/5">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: text.length * 0.05 }}
            src={require('../../assets/' + img)}
            alt="logo"
            className="max-w-full"
          />
        </div>
      )}
      {children && <div className="w-fit">{children}</div>}
    </motion.div>
  );
});
