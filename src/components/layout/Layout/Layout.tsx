import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../../store";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useAuthStore((s) => s.user)

  const isLoginPage: boolean =
    location.pathname === "/auth" || location.pathname === "/auth/login";
  const signUpMessage = isLoginPage
    ? "ثبت‌نام نکرده‌ای؟"
    : "قبلا ثبت‌نام کرده‌ای؟";

  const btnValue = isLoginPage ? "ثبت‌نام" : "ورود";

  const navigateTo = isLoginPage ? "/auth/signUp" : "/auth/login";

  useEffect(()=>{
    if(user.username){
      navigate("/")
    }
  },[user])

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center text-black">
      <div className="absolute top-[45px] w-10/12 flex justify-between">
        <h1 className="font-heading text-heading-l bg-gradient-to-r from-[#118C80] to-[#4AB7D8] text-transparent bg-clip-text">
          کوئرا تسک منیجر
        </h1>
        <div className="flex justify-center items-center gap-[10px]">
          <p className="font-body text-bold-m">{signUpMessage}</p>
          <button
            className="w-[95px] h-10 p-2.5 rounded-md duration-300 bg-brand-primary hover:bg-teal-primary text-white font-heading text-body-s select-none"
            onClick={() => navigate(navigateTo)}
          >
            {btnValue}
          </button>
        </div>
      </div>
      <Outlet />
      <div className="absolute top-[450px] w-full h-screen z-[-1] skew-y-[-6deg] bg-gradient-to-l from-[#06846F] to-[#54BEE8]"></div>
    </div>
  );
}

export default Layout;
