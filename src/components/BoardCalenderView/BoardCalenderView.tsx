import { FirstSevenDays } from "./FirstSevenDays";
import { RemainingDaysOfTheMonth } from "./RemainingDaysOfTheMonth";

export const BoardCalenderView: React.FC = ({}) => {
  return (
    <div className="grid grid-cols-7 gap-4 w-full h-screen overflow-y-auto p-4">
      {Array.from({ length: 35 }).map((_, index) => {
        return (
          <>
            {index < 7 ? (
              <FirstSevenDays dayIndex={index} />
            ) : (
              <RemainingDaysOfTheMonth dayIndex={index} />
            )}
          </>
        );
      })}
    </div>
  );
};
