import { motion } from 'framer-motion';
import { Button } from '../Common';

export const SprintMeetingStage = ({ stageData, onComplete }) => {
  const variants = {
    initial: { opacity: 0, y: 80 },
    hidden: { opacity: 0, y: 0 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + custom * 0.5 },
    }),
  };

  return (
    <div className="h-full pb-28">
      <div className="min-h-[70vh] mt-12 bg-assist1 rounded-4xl px-12 py-16">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-stretch gap-4">
          {stageData.items.map((item, i) => {
            return (
              <motion.div
                initial="initial"
                animate="visible"
                custom={i}
                variants={variants}
                key={item.title}
                className="basis-1/3 border-3 border-primary1 rounded-3xl text-assist2 text-xl py-10 px-6"
              >
                <h2 className="text-3xl text-center leading-none mb-4 text-primary3">
                  {item.title}
                </h2>
                <h4 className="text-xl text-primary2 text-center mb-4">
                  {item.subtitle}
                </h4>
                <p>{item.overview}</p>
                <ul className="">
                  {item?.list?.map((li) => {
                    return (
                      <li
                        key={li}
                        dangerouslySetInnerHTML={{ __html: li }}
                        className="relative pl-5 before:content-['•'] before:absolute before:left-1"
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
          className="text-center pt-10"
        >
          <Button type="next" onClick={onComplete} />
        </motion.div>
      </div>
    </div>
  );
};
