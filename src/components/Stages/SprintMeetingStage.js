import { motion } from 'framer-motion';

export const SprintMeetingStage = ({ stageData, onComplete }) => {
  return (
    <div className="h-full pb-28">
      <div className="min-h-[70vh] mt-12 bg-assist1 rounded-4xl px-12 py-16">
        <div className="flex flex-wrap justify-between items-stretch gap-4">
          {stageData.items.map((item) => {
            return (
              <motion.div
                key={item.title}
                className="border-3 border-primary1 rounded-3xl text-assist2 text-xl py-10 px-6"
              >
                <h2 className="text-3xl text-center leading-none mb-4 text-primary3">
                  {item.title}
                </h2>
                <h4 className="text-xl text-primary2 text-center mb-4">
                  {item.subtitle}
                </h4>
                <p>{item.overview}</p>
                <ul className="list-disc list-inside">
                  {item?.list?.map((li) => {
                    return (
                      <li
                        key={li}
                        dangerouslySetInnerHTML={{ __html: li }}
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
      </div>
    </div>
  );
};
