export const MainLayout = ({ className, children }) => {
  let classes = 'h-screen border-8 border-gray-600';
  if (className) classes += ' ' + className;
  return <div className={classes}>{children}</div>;
};
