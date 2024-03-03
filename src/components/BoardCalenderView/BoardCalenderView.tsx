export const BoardCalenderView: React.FC = ({}) => {
  return (
    <div className="grid grid-cols-7 gap-4">
      {Array.from({ length: 35 }).map((_, index) => {
        return <div key={index}>{index}</div>;
      })}
    </div>
  );
};
