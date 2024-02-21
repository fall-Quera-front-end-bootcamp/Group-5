import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsPersonGear, BsPersonCheck } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";

const Profile = () => {
  const [tab, setTab] = useState("personalInfo");
  return (
    <div className="h-screen flex">
      {/* aside */}
      <div className="flex justify-start flex-col  border-l-2 w-[340px] py-6  px-10">
        <h2 className=" mb-[80px] font-heading text-heading-l bg-gradient-to-r from-[#118C80] to-[#4AB7D8] text-transparent bg-clip-text">
          کوئرا تسک منیجر
        </h2>
        <button className="flex justify-between h-[36px] w-[90px] bg-brand-primary text-white py-[4px] px-[8px] mb-[40px] rounded-lg items-center">
          <FaArrowRightLong /> <span className="font-body ">بازگشت</span>
        </button>
        <div>
          <div
            className={`cursor-pointer w-[266px] py-[8px] px-[10px] mb-[11px] rounded flex items-center gap-2  ${
              tab === "personalInfo" && "bg-brand-secondary font-bold text-m"
            }`}
            onClick={() => setTab("personalInfo")}
          >
            <BsPersonGear size="22px" />
            <span>اطلاعات فردی</span>
          </div>
          <div
            className={`cursor-pointer w-[266px] py-[8px] px-[10px] mb-[11px] rounded flex items-center gap-2 ${
              tab === "accountInfo" && "bg-brand-secondary font-bold text-m"
            }`}
            onClick={() => setTab("accountInfo")}
          >
            <BsPersonCheck size="22px" />
            <span>اطلاعات حساب</span>
          </div>
          <div
            className={`cursor-pointer w-[266px] py-[8px] px-[10px] mb-[11px] rounded flex items-center gap-2 ${
              tab === "settings" && "bg-brand-secondary font-bold text-m"
            }`}
            onClick={() => setTab("settings")}
          >
            <SlSettings size="22px" />
            <span>تنظیمات</span>
          </div>
        </div>
      </div>
      {/* main */}
      <div className="mt-[135px] mx-[60px]">
        {tab === "personalInfo" && (
          <>
            <h3 className="font-body text-[31px]">اطلاعات فردی</h3>
            <div>personal Form</div>
          </>
        )}
        {tab === "accountInfo" && (
          <>
            <h3 className="font-body text-[31px]">اطلاعات حساب</h3>
            <div>account Form</div>
          </>
        )}
        {tab === "settings" && (
          <>
            <h3 className="font-body text-[31px]">تنظیمات</h3>
            <div>theme settings</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
