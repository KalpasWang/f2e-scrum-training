import classNames from 'classnames';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export const Message = ({
  text,
  borderColor = 'primary3',
  color = 'assist2',
  img,
  delay = 0.1,
  className,
  children,
}) => {
  const borderStyle = {
    primary1: 'border-primary1',
    primary2: 'border-primary2',
    primary3: 'border-primary3',
  };

  const textColor = {
    assist2: 'text-assist2',
    primary2: 'text-primary2',
  };

  const containerClass = classNames(
    'flex flex-col sm:flex-row items-center gap-1 sm:gap-4 py-1 sm:py-3 px-1 sm:px-6 rounded-3xl border-3',
    borderStyle[borderColor],
    className
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay }}
      className={containerClass}
    >
      <div className="relative flex-grow">
        <div className={`${textColor[color]} min-h-[3rem] w-full`}>
          <Typewriter
            key={text}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(delay * 1000)
                .typeString(text)
                .start();
            }}
            options={{ delay: 70 }}
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
};
