import React from 'react';

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return <div className="min-h-screen bg-assist2">{children}</div>;
};
