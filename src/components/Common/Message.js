import React from 'react';

export const Message = ({ text, role }) => {
  return (
    <div className="flex flex-row items-start gap-6">
      <div className="basis-20 relative">
        <img
          src="http://gravatar.com/avatar/5fe1d67c1a4749dff7c75a0bac039ee4?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-94696e1c3870f64217a8040eedd4a1ed.png"
          alt="avatar"
          className="rounded-full max-w-full"
        />
        <span className="px-1 py-3 border border-gray-400 -bottom-2 left-1/2 -translate-x-1/2">
          {role}
        </span>
      </div>
      <div className="flex-grow">
        <div className="w-full bg-slate-600">
          {text.map((p, i) => {
            return (
              <p key={i} className="mb-4">
                {p}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
