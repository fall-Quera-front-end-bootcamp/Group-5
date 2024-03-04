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

export const FirstSevenDays: React.FC<DayType> = ({
  dayIndex,
}): JSX.Element => {
  return (
    <>
      <div
        key={dayIndex}
        className="relative w-auto max-h-[156px] pr-2 border-4 border-black"
      >
        <span>{DaysEnum[dayIndex]}</span>
        <div className="absolute bottom-0 left-0 pl-2 pb-1">{dayIndex}</div>
      </div>
    </>
  );
};
