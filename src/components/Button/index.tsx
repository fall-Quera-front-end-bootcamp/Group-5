import React from "react";

interface MyButtonProps {
  myKey: string; // Rename the prop to myKey
  label: string;
}

function renderSwitch(param: string) {
  switch (param) {
    case "signIn":
      return (
        <div className="flex items-center justify-center mt-m font-bold">
          <p className="font-normal text-body-m  ">
            ثبت نام نکرده‌ای؟{" "}
            <span className="text-brand-primary"> ثبت‌نام</span>
          </p>
        </div>
      );
    case "forgotPassword":
      return (
        <div className="flex items-center justify-center mt-m font-bold">
          <p className="font-bold text-body-m text-brand-primary">بازگشت</p>
        </div>
      );
    default:
      return null; // Return null instead of an empty value
  }
}

const MYButton: React.FC<MyButtonProps> = ({ myKey, label }) => {
  return (
    <>
      {myKey === "signIn" && (
        <p className="mb-s mt-xs font-body text-bold-xs underline">
          رمز عبور خود را فراموش کرده‌اید؟
        </p>
      )}
      <button
        type="submit"
        className="bg-brand-primary hover:bg-teal-primary text-white font-bold text-bold-s h-xl w-full rounded-[6px] mt-m"
      >
        {label}
      </button>
      {renderSwitch(myKey)}
    </>
  );
};

export default MYButton;
