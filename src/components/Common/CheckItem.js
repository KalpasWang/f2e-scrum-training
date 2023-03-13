import classNames from 'classnames';
import { useState } from 'react';

export const CheckItem = ({ children, className }) => {
  const [checked, setChecked] = useState(false);

  function changeHandler({ target }) {
    setChecked(target.checked);
  }

  const container = classNames(
    'h-36 flex px-8 items-center gap-2 lg:gap-7 rounded-full cursor-pointer transition-all',
    {
      'bg-assist2 bg-opacity-10 border-3 border-assist2 border-opacity-10': true,
      'border-primary3 border-opacity-100': checked,
    },
    className
  );

  const path = classNames('transition-all', {
    'fill-primary3 opacity-100': checked,
    'fill-assist2 opacity-50': !checked,
  });

  return (
    <label className={container}>
      <div>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // opacity="0.5"
            className={path}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57ZM30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
            // fill="#FFF9F6"
          />
          <path
            // opacity="0.5"
            className={path}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.3881 18.7913C47.0557 19.2818 47.1993 20.2206 46.7088 20.8882L27.6378 46.8461L12.4034 30.5236C11.8382 29.918 11.8709 28.9688 12.4765 28.4035C13.0822 27.8383 14.0313 27.871 14.5966 28.4766L27.3623 42.1541L44.2912 19.112C44.7817 18.4444 45.7205 18.3008 46.3881 18.7913Z"
            // fill="#FFF9F6"
          />
        </svg>
      </div>
      <div className="flex-grow text-lg text-assist2 lg:text-2xl">
        {children}
      </div>
      <input
        type="checkbox"
        className="hidden"
        onChange={changeHandler}
        checked={checked}
      />
    </label>
  );
};
