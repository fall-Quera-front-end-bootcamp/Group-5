import RenderCells from "./RenderCells";


const BoardCalenderView: React.FC = () => {
  return (
    <div className="p-10">

      <div className="h-full border-r-[1px] border-t-[1px] border-black w-full z-10">

        <div className="grid grid-cols-7 w-full h-screen">
          {Array.from({ length: 35 }).map((_, index) =>
            <RenderCells dayIndex={index} key={index} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardCalenderView