import classNames from 'classnames';

export const Message = ({ text, role, ...other }) => {
  const texts = text.split('\n').map((p, i) => {
    return (
      <p key={i} className={i > 0 ? 'mt-4' : undefined}>
        {p}
      </p>
    );
  });

  const containerClass = classNames(
    'flex flex-row items-center gap-6',
    other.className
  );

  return (
    <div className={containerClass}>
      <div className="basis-20 relative">
        <img
          src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png"
          alt="avatar"
          className="rounded-full max-w-full"
        />
        <span className="absolute p-1 bg-white border border-gray-400 -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
          {role}
        </span>
      </div>
      <div className="flex-grow relative">
        <div className="absolute left-1 top-1/3 -translate-x-full">
          <svg id="triangle" viewBox="0 0 100 100" width="16" height="16">
            <polygon points="0 50, 100 0, 100 100" fill="#485569" />
          </svg>
        </div>
        <div className="w-full p-4 bg-slate-600 text-white">{texts}</div>
      </div>
    </div>
  );
};
