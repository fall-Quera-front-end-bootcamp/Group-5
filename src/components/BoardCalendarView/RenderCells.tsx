export type DayType = {
  dayIndex: number;
};

const DaysEnum: { [key: number]: string } = {
  0: "شنبه",
  1: "یکشنبه",
  2: "دوشنبه",
  3: "سه‌شنبه",
  4: "چهارشنبه",
  5: "پنج‌شنبه",
  6: "جمعه",
};

const RenderCells: React.FC<DayType> = ({
  dayIndex,
}): JSX.Element => {
  return (
    <div className="border-l-[1px] border-b-[1px] border-black relative">
      <div
        className="w-40 max-h-[133px] p-2"
      >
        {dayIndex < 7 && <div className="absolute right-1 top-1">{DaysEnum[dayIndex]}</div>}
        <div className="absolute bottom-1 left-2">{dayIndex}</div>
      </div>
    </div>
  );
};

export default RenderCells