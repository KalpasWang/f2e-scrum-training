import classNames from 'classnames';

export const Message = ({
  text,
  borderColor = 'primary3',
  color = 'assist2',
  img,
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
    'flex flex-row items-center gap-4 py-3 px-6 rounded-3xl border-3',
    borderStyle[borderColor],
    className
  );

  return (
    <div className={containerClass}>
      <div className="flex-grow relative">
        <p
          className={textColor[color]}
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      </div>
      {img && (
        <div className="w-fit">
          <img
            src={require('../../assets/' + img)}
            alt="logo"
            className="max-w-full"
          />
        </div>
      )}
      {children && <div className="w-fit">{children}</div>}
    </div>
  );
};
