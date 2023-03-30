import React from 'react';

export type ButtonType = 'default' | 'next' | 'disabled';
export type ButtonColor = 'primary1' | 'primary2' | 'primary3';
export type ButtonSize = 'lg' | 'sm';
export type ButtonProps = {
  onClick: () => void;
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  children?: React.ReactNode;
};

export const Button = ({
  children,
  onClick,
  type,
  color = 'primary3',
  size = 'lg',
}: ButtonProps) => {
  let bgColor = 'bg-primary2';
  let textColor = 'text-assist1';
  let isDisable = false;
  const fill: Record<ButtonColor, string> = {
    primary1: 'fill-primary1',
    primary2: 'fill-primary2',
    primary3: 'fill-primary3',
  };
  const sizing: Record<ButtonSize, string> = {
    sm: 'w-16 h-16',
    lg: 'w-26 h-26',
  };

  if (type === 'next') {
    return (
      <button
        title="next"
        type="button"
        onClick={onClick}
        className="inline-block"
      >
        <svg
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={sizing[size]}
        >
          <g clipPath="url(#clip0_35_346)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M52 99C77.9574 99 99 77.9574 99 52C99 26.0426 77.9574 5 52 5C26.0426 5 5 26.0426 5 52C5 77.9574 26.0426 99 52 99ZM52 104C80.7188 104 104 80.7188 104 52C104 23.2812 80.7188 0 52 0C23.2812 0 0 23.2812 0 52C0 80.7188 23.2812 104 52 104Z"
              className={fill[color]}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.5 52C79.5 53.3807 78.3807 54.5 77 54.5L28 54.5C26.6193 54.5 25.5 53.3807 25.5 52C25.5 50.6193 26.6193 49.5 28 49.5L77 49.5C78.3807 49.5 79.5 50.6193 79.5 52Z"
              className={fill[color]}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.6016 52L50.7353 80.7996C49.7414 81.758 48.1587 81.7292 47.2003 80.7353C46.2419 79.7414 46.2707 78.1588 47.2646 77.2004L73.3984 52L47.2646 26.7996C46.2707 25.8412 46.242 24.2586 47.2004 23.2647C48.1588 22.2708 49.7414 22.242 50.7353 23.2004L80.6016 52Z"
              className={fill[color]}
            />
          </g>
          <defs>
            <clipPath id="clip0_35_346">
              <rect width="104" height="104" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    );
  }

  if (type === 'disabled') {
    bgColor = 'bg-disabled';
    textColor = 'text-assist2';
    isDisable = true;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-block rounded-2xl py-6 px-8 text-3xl ${bgColor} ${textColor}`}
      disabled={isDisable}
    >
      {children}
    </button>
  );
};
