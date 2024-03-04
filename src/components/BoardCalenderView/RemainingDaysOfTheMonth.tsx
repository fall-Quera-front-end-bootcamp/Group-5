import { DayType } from "./FirstSevenDays";

export const RemainingDaysOfTheMonth: React.FC<DayType> = ({
  dayIndex,
}): JSX.Element => {
  return (
    <div
      key={dayIndex}
      className="relative w-auto max-h-[156px] p-2 border-4 border-black"
    >
      <div className="absolute bottom-0 left-0 pl-2 pb-1">{dayIndex}</div>
    </div>
  );
};
