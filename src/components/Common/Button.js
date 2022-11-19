import classNames from 'classnames';
import arrowBig from '../../assets/arrowBig.svg';

export const Button = ({ children, onClick, type }) => {
  let bgColor = 'bg-primary2';
  let textColor = 'text-assist1';

  if (type === 'next') {
    return (
      <button onClick={onClick}>
        <img src={arrowBig} alt="next" />
      </button>
    );
  }

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
