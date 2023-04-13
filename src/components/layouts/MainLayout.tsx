import React from 'react';

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-screen min-h-[30rem] min-w-[22rem] bg-assist2">
      {children}
    </div>
  );
};
