import { useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import "./index.css"

type PropsType = {
  setShowCalendar: (showCalendar: boolean) => void;
};

const CalendarModal = ({ setShowCalendar }: PropsType): JSX.Element => {
  useLockBodyScroll();

  const [dateValue, setDateValue] = useState(new DateObject());

  return (
    <>
      <div
        onClick={() => setShowCalendar(false)}
        className="flex justify-center items-center fixed inset-0 z-50"
      >
        <div>
          <Calendar
            value={dateValue}
            onChange={(selectedDates) =>
              setDateValue(selectedDates as DateObject)
            }
            calendar={persian}
            locale={persian_fa}
          />
        </div>
        <button style={{ margin: "5px" }}>لغو انتخاب</button>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default CalendarModal;
