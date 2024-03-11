import { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import persian_fa from "react-date-object/locales/persian_fa";
import { BsCalendar4Event } from "react-icons/bs";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import "./index.css";

type PropsType = {
  setShowCalendar: (showCalendar: boolean) => void;
};

const CalendarModal = ({ setShowCalendar }: PropsType): JSX.Element => {
  useLockBodyScroll();

  const [value, setValue] = useState();

  const weekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];

  const handleSetTime = (date: any) => {
    setValue(date);
  };

  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-50">
        <div className="w-[936px] bg-white rounded-[20px] shadow-lg">
          <div className="flex justify-between items-center w-full h-9 my-5">
            <div className="flex justify-start items-center gap-2 w-1/2 mr-3 text-2xl">
              <BsCalendar4Event className="text-[#BDBDBD]" />
              <span>زمان شروع</span>
            </div>

            <div className="w-[1px] h-6 bg-[#E8EAED]" />

            <div className="flex items-center gap-2 w-1/2 mr-3 text-2xl">
              <BsCalendar4Event className="text-[#BDBDBD]" />
              <span>زمان پایان</span>
            </div>
          </div>

          <hr />

          <div className="font-body">
            <Calendar
              calendar={persian}
              locale={persian_fa}
              disableMonthPicker
              disableYearPicker
              onChange={handleSetTime}
              value={value}
              weekDays={weekDays}
              plugins={[<DatePanel header=" " />]}
              headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
              monthYearSeparator=" "
              multiple={false}
            />
          </div>

          <hr />

          <div className="flex justify-end gap-3 w-full my-5 px-8">
            <button
              className="w-[125px] h-8 bg-brand-primary hover:bg-teal-primary text-white font-body text-xs px-2 py-1 rounded shadow hover:shadow-lg ease-linear transition-all duration-150"
              onClick={() => setShowCalendar(false)}
            >
              بستن
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default CalendarModal;
