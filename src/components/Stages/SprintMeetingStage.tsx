import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Common';
import { SprintMeetingData } from '../../shared/types';

type Props = {
  stageData: SprintMeetingData;
  onComplete: () => void;
};

export const SprintMeetingStage = ({ stageData, onComplete }: Props) => {
  const variants = {
    initial: { opacity: 0, y: 80 },
    hidden: { opacity: 0, y: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + custom * 0.5 },
    }),
  };

  return (
    <div className="h-full pb-28">
      <div className="mt-12 min-h-[70vh] rounded-4xl bg-assist1 px-3 py-4 lg:px-12 lg:py-16">
        <div className="flex flex-col items-stretch justify-start gap-4 lg:flex-row lg:justify-center">
          {stageData.items.map((item, i) => {
            return (
              <motion.div
                initial="initial"
                animate="visible"
                custom={i}
                variants={variants}
                key={item.title}
                className="basis-1/3 rounded-3xl border-3 border-primary1 py-4 px-2 text-base text-assist2 lg:py-10 lg:px-6 lg:text-xl"
              >
                <h2 className="mb-4 text-center text-xl leading-none text-primary3 lg:text-3xl">
                  {item.title}
                </h2>
                <h4 className="mb-4 text-center text-sm text-primary2 lg:text-xl">
                  {item.subtitle}
                </h4>
                <p>{item.overview}</p>
                <ul className="">
                  {item?.list?.map((li) => {
                    return (
                      <li
                        key={li}
                        dangerouslySetInnerHTML={{ __html: li }}
                        className="relative pl-5 before:absolute before:left-1 before:content-['•']"
                      ></li>
                    );
                  })}
                </ul>
                <p>{item.conclusion}</p>
                {item.bonus && (
                  <p>
                    {item.bonus}
                    <img
                      className="inline-block"
                      src={require('../../assets/' + item.bonusImage)}
                      alt="recommended tools"
                    />
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={variants}
          className="pt-10 text-center"
        >
          <Button type="next" onClick={onComplete} />
        </motion.div>
      </div>
    </div>
  );
};
