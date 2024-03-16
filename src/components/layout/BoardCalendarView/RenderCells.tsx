import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import Popup from "reactjs-popup";
import { NewTaskBoardCalendar } from "../../common/Modals";

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

const RenderCells: React.FC<DayType> = ({ dayIndex }): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border-l-[1px] border-b-[1px] border-black transition duration-500 ease-in-out"
    >
      <div className="w-40 max-h-[133px] p-2">
        {dayIndex < 7 && (
          <div className="absolute right-1 top-1 font-body font-bold">
            {DaysEnum[dayIndex]}
          </div>
        )}
        <div className="absolute bottom-1 left-2">{dayIndex}</div>
        <div className="text-brand-primary cursor-pointer absolute bottom-2 right-2">
          <Popup
            trigger={
              <div>
                <FaPlusSquare
                  size={20}
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.5s",
                  }}
                />
              </div>
            }
            position="right center"
            contentStyle={{
              width: "350px",
              margin: "auto",
              background: "rgb(255, 255, 255)",
              padding: "25px",
            }}
          >
            <NewTaskBoardCalendar />
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default RenderCells;
