import classNames from 'classnames';

export const Button = ({ children, onClick, bg, color }) => {
  const bgColor = bg || 'bg-primary2';
  const textColor = color || 'text-assist1';

  const style = classNames(
    'py-6 px-8 text-3xl rounded-2xl',
    bgColor,
    textColor
  );

  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
};
