import React from "react";

interface MyButtonProps {
  key: string;
  label: string;
}
function renderSwitch(param: string) {
  switch (param) {
    case "signIn":
      return (
        <div className="flex items-center justify-center">
          <div className="">ثبت نام نکرده‌ای؟ </div>
          <p>ثبت‌نام</p>
        </div>
      );
    case "forgotPassword":
      return <p>بازگشت</p>;
    default:
      return;
  }
}
const MYButton: React.FC<MyButtonProps> = ({ key, label }) => {
  return (
    <>
      {key === "signIn" && <p>رمز عبور فراموش کردم</p>}
      <button
        type="submit"
        className="bg-brand-primary 
    hover:bg-teal-primary 
    text-white 
    font-body-800 
    h-xl w-full rounded-[6px]
    "
      >
        {label}
      </button>
      {renderSwitch(key)}
    </>
  );
};
export default MYButton;
