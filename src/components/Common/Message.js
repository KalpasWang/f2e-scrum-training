import React from 'react';

export const Message = ({ text, role }) => {
  const texts = text.split('\n').map((p, i) => {
    return (
      <p key={i} className={i > 0 && 'mt-4'}>
        {p}
      </p>
    );
  });
  return (
    <div className="flex flex-row items-center gap-6">
      <div className="basis-20 relative">
        <img
          src="http://gravatar.com/avatar/5fe1d67c1a4749dff7c75a0bac039ee4?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-94696e1c3870f64217a8040eedd4a1ed.png"
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
