import RenderCells from "./RenderCells";

const BoardCalendarView: React.FC = () => {
  return (
    <div className="w-full p-10">
      <div className="w-full h-full border-r-[1px] border-t-[1px] border-black z-10">
        <div className="w-full h-screen grid grid-cols-7">
          {Array.from({ length: 35 }).map((_, index) =>
            <RenderCells dayIndex={index} key={index} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardCalendarView