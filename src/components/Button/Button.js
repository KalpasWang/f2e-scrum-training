export const Button = ({ children }) => {
  return (
    <button className="py-1 px-3 rounded-md bg-violet-600 text-white hover:bg-violet-700">
      {children}
    </button>
  );
};
