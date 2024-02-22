import React from "react";
import { useNavigate } from "react-router-dom";

interface MyButtonProps {
  myKey: string; // Rename the prop to myKey
  label: string;
}

function RenderSwitch(param: string) {
  const navigate = useNavigate();

  switch (param) {
    case "signIn":
      return (
        <div className="flex items-center justify-center mt-m font-bold">
          <p className="font-normal text-body-m  ">
            ثبت نام نکرده‌ای؟{" "}
            <span
              className="text-brand-primary cursor-pointer"
              onClick={() => navigate("/signUp")}
            >
              {" "}
              ثبت‌نام
            </span>
          </p>
        </div>
      );
    case "forgotPassword":
      return (
        <div className="flex items-center justify-center mt-m font-bold">
          <p
            className="font-bold text-body-m text-brand-primary cursor-pointer"
            onClick={() => navigate(-1)}
          >
            بازگشت
          </p>
        </div>
      );
    default:
      return null; // Return null instead of an empty value
  }
}

const MYButton: React.FC<MyButtonProps> = ({ myKey, label }) => {
  const navigate = useNavigate();

  return (
    <>
      {myKey === "signIn" && (
        <p
          className="mb-s mt-xs font-body text-bold-xs underline cursor-pointer"
          onClick={() => navigate("/forgotPassword")}
        >
          رمز عبور خود را فراموش کرده‌اید؟
        </p>
      )}
      <button
        type="submit"
        className="bg-brand-primary hover:bg-teal-primary text-white font-bold text-bold-s h-xl w-full rounded-[6px] mt-l"
      >
        {label}
      </button>
      {RenderSwitch(myKey)}
    </>
  );
};

export default MYButton;
