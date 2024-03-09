import { useState } from "react";
import PermissionList from "./PermissionList" 
import useLockBodyScroll from "../../hooks/useLockBodyScroll"
import { IoClose } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

type PropsType = {
  setShowModal: (showModal: boolean) => void
}

const ShareProject = ({setShowModal}:PropsType) => {
  useLockBodyScroll();

  const [showPermission, setShowPermission] = useState(false);

  return (
    <>
      <div className="flex justify-center top-20 bottom-auto fixed inset-0 z-30">
        <div className="w-[470px] p-5 bg-white text-[#1E1E1E] font-body rounded-xl flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <button
              className="text-2xl hover:text-red-primary hover:rotate-90 transition-all"
              onClick={() => setShowModal(false)}
            >
              <IoClose />
            </button>
            <h2 className="text-center font-heading text-heading-xs">به اشتراک‌گذاری پروژه</h2>
            <span className="w-6" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center h-10 rounded-lg overflow-hidden">
              <input
                className="w-4/5 h-full bg-[#F0F1F3] p-3"
                placeholder="دعوت با ایمیل"
                type="email"
              />
              <button className="w-1/5 h-full transition-all bg-brand-primary hover:bg-teal-primary text-white">ارسال</button>
            </div>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <FaLink />
                <span>لینک خصوصی</span>
              </div>
              <button className="hover:bg-gray-100 text-xs px-3 py-1 border rounded-md">کپی لینک</button>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#7D828C] text-sm">اشتراک‌گذاشته شده با</p>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center object-cover object-center gap-3">
                    <div className="flex items-center gap-2">
                      <img className="rounded-full w-9 h-9" src="https://s3-alpha-sig.figma.com/img/0e35/b8e1/c386fc03b862ed171fd63bb7292d7d01?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Iear2vlOY0kMXWnxMDhcdhd4~VIxLgBI~~wG1XLsPfC78bhDGxsjU1-qKWmuKZ2dKV0TOfoUkCUN-mGZAFyIDc0UNwvSJ1JHf4BtArGvIR1ILiH1jU~LhKTvVfKB6jKELi4eEpD1F4Y2BEkeahyJkOA-I~NzAQloznhh1br1bsq3Y0fxtRbr7pZp0QHpqFRI6EFliOsMhEmJnmt1WGe~AxChOyGmrjwTVYb6fAFhUTfmYIGE6IBuv6u4cvsw3D8zvE2OlAqi7ndG4r~GAi14u2tQc1qvymDJSm2CY~hk~WcSefvmCn-cJdEujfpSIuGl-sh~aVNIjKnIjILUyfECPw__" alt="" />
                      <span>من</span>
                    </div>
                    <div className="flex justify-center items-center h-6 px-2 py-1 bg-blue-secondary text-xs text-[#228BE6] rounded-md">مالک ورک‌اسپیس</div>
                  </div>
                  <button className="h-6 hover:bg-gray-100 text-xs px-3 py-1 border rounded-md">دسترسی کامل</button>
                </div>
                <div className="relative flex justify-between items-center">
                  <div className="flex items-center object-cover object-center gap-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex items-center justify-center 
                        rounded-full bg-[#F27474] w-9 h-9"
                      >
                        Al
                      </div>
                      <span>alireza3205@gmail.com</span>
                    </div>
                  </div>
                  <button
                    className="h-6 flex items-center gap-2 hover:bg-gray-100 text-xs px-3 py-1 border rounded-md"
                    onClick={() => setShowPermission(true)}
                  >
                    <span>دسترسی کامل</span>
                    <IoIosArrowDown />
                  </button>
                  {showPermission && <PermissionList setShowModal={setShowPermission} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-10 bg-black"></div>
    </>
  );
};

export default ShareProject;