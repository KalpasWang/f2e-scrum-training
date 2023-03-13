// import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, CheckItem } from '../Common';
import { Message } from '../Common/Message';
import poSit from '../../assets/poSit.svg';

export const RetroStage = ({ stageData, onComplete }) => {
  // const [btnState, setBtnState] = useState('disabled');

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="relative z-10 flex flex-col-reverse items-center justify-start px-8 md:flex-row"
      >
        <img
          key={stageData.roleImg}
          className="mr-1 basis-1/2 md:mr-4 md:w-1/4 md:basis-1/4 lg:w-auto lg:basis-auto"
          src={poSit}
          alt="role"
        />
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          width="44"
          height="8"
          viewBox="0 0 44 8"
          fill="none"
          className="basis-1/12 -translate-y-6 rotate-90 md:rotate-0 lg:basis-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2C8.51163 5.01849 25.6279 9.24439 42 2"
            stroke="#FF60FA"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.svg>
        <Message
          borderColor="primary2"
          color="primary2"
          text={stageData.message}
          delay={1}
          className="basis-2/3 -translate-y-6 bg-assist2"
        >
          {stageData.button && (
            <Button
              type="next"
              size="sm"
              color="primary2"
              onClick={onComplete}
            />
          )}
        </Message>
      </motion.div>
      <div className="relative -top-16 h-full rounded-5xl bg-assist1 px-1 pb-8 pt-28 lg:px-8">
        {stageData.show && (
          <div className="flex w-full flex-col items-stretch justify-center divide-y-3 divide-primary3 lg:flex-row lg:divide-x-3 lg:divide-y-0">
            <div className="w-full p-1 lg:p-11">
              <h2 className="mb-6 text-center text-3xl text-primary3">
                做得好的地方
              </h2>
              {stageData.goods.map((good) => {
                return (
                  <CheckItem key={good.id} className="mb-6">
                    {good.text}
                  </CheckItem>
                );
              })}
            </div>
            <div className="w-full p-1 lg:p-11">
              <h2 className="mb-6 mt-5 text-center text-3xl text-primary3 lg:mt-0">
                有哪些可以做得更好
              </h2>
              {stageData.bads.map((bad) => {
                return (
                  <CheckItem key={bad.id} className="mb-6">
                    {bad.text}
                  </CheckItem>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {stageData.show && (
        <div className="pt-3 pb-8 text-center">
          <Button type="default" onClick={onComplete}>
            {stageData.action}
          </Button>
        </div>
      )}
    </div>
  );
};
