export const Message = ({
  text,
  borderColor = 'primary3',
  color = 'assist2',
  img,
}) => {
  const borderStyle = {
    primary2: 'border-primary2',
    primary3: 'border-primary3',
  };

  const textColor = {
    assist2: 'text-assist2',
    primary2: 'text-primary2',
  };

  return (
    <div
      className={
        'flex flex-row items-center gap-4 py-3 px-6 rounded-3xl border-3 ' +
        borderStyle[borderColor]
      }
    >
      <div className="flex-grow relative">
        <p
          className={textColor[color]}
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      </div>
      <div className="w-fit">
        <img
          src={require('../../assets/' + img)}
          alt="logo"
          className="max-w-full"
        />
      </div>
    </div>
  );
};
