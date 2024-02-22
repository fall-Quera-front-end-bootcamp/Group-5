import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsPersonGear, BsPersonCheck } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";

interface SlideProps {
  tab: string;
  setTab: (tab: string) => void;
}

const Slide: React.FC<SlideProps> = ({ tab, setTab }) => (
  <div className="flex justify-start flex-col  border-l-2 w-[340px] py-6  px-10">
    <h2 className=" mb-[60px] font-heading text-heading-l bg-gradient-to-r from-[#118C80] to-[#4AB7D8] text-transparent bg-clip-text">
      کوئرا تسک منیجر
    </h2>
    <button className="flex justify-between h-[36px] w-[90px] bg-brand-primary text-white py-[4px] px-[8px] mb-[40px] rounded-lg items-center">
      <FaArrowRightLong /> <span className="font-body ">بازگشت</span>
    </button>
    <div>
      <div
        className={`cursor-pointer w-[266px] py-[8px] px-[10px] mb-[20px] rounded flex items-center gap-2 text-[18px] ${
          tab === "personalInfo" ? "bg-brand-secondary font-bold " : "font-body"
        }`}
        onClick={() => setTab("personalInfo")}
      >
        <BsPersonGear size="22px" />
        <span>اطلاعات فردی</span>
      </div>
      <div
        className={`cursor-pointer w-[266px] py-[8px] px-[10px] mb-[20px] rounded flex items-center gap-2 text-[18px] ${
          tab === "accountInfo" ? "bg-brand-secondary font-bold " : "font-body"
        }`}
        onClick={() => setTab("accountInfo")}
      >
        <BsPersonCheck size="22px" />
        <span>اطلاعات حساب</span>
      </div>
      <div
        className={`cursor-pointer w-[266px] py-[8px] px-[10px] mb-[20px] rounded flex items-center gap-2 text-[18px] ${
          tab === "settings" ? "bg-brand-secondary font-bold " : "font-body"
        }`}
        onClick={() => setTab("settings")}
      >
        <SlSettings size="22px" />
        <span>تنظیمات</span>
      </div>
    </div>
  </div>
);

export default Slide;
