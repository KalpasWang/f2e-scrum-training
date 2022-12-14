export const Bar = ({ value, maxValue, className }) => {
  const percent = `${(value / maxValue) * 100}%`;
  return (
    <div className={`h-6 rounded-full bg-gray5 overflow-hidden ${className}`}>
      <div
        className="h-full bg-primary3 transition-all duration-500"
        style={{ width: percent }}
      ></div>
    </div>
  );
};
