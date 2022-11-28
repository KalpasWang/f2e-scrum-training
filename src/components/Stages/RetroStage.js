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
        className="flex justify-start items-center px-8 relative z-10"
      >
        <motion.img
          key={stageData.roleImg}
          className="mr-4"
          src={poSit}
          alt="role"
        />
        <motion.svg
          width="44"
          height="8"
          viewBox="0 0 44 8"
          fill="none"
          className="-translate-y-6"
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
          delay={1000}
          className="-translate-y-6"
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
      <div className="relative bg-assist1 rounded-5xl px-8 pb-8 pt-28 -top-16 h-full">
        {stageData.show && (
          <div className="w-full flex flex-col lg:flex-row justify-center items-stretch divide-y-3 lg:divide-x-3 lg:divide-y-0 divide-primary3">
            <div className="w-full p-11">
              <h2 className="text-3xl text-primary3 text-center mb-6">
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
            <div className="w-full p-11">
              <h2 className="text-3xl text-primary3 text-center mb-6">
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
        <div className="text-center pt-3 pb-8">
          <Button type="default" onClick={onComplete}>
            {stageData.action}
          </Button>
        </div>
      )}
    </div>
  );
};
