export const Bar = ({ value, maxValue }) => {
  const percent = `${(value / maxValue) * 100}%`;
  return (
    <div className="h-6 rounded border border-green-700 overflow-hidden">
      <div className="h-full bg-green-500" style={{ width: percent }}></div>
    </div>
  );
};
