import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiThList } from "react-icons/ti";
import { MdOutlineDashboard } from "react-icons/md";
import { LuCalendarDays, LuSettings2 } from "react-icons/lu";
import { IoShareSocialOutline, IoRefreshOutline } from "react-icons/io5";
import { ShareProject } from "../../common";

interface SidebarHeaderProps {
  className: string;
}

const SidebarHeader = ({className} : SidebarHeaderProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={className}>
      <div className="flex flex-col ">
        <div className=" flex justify-between items-center py-s px-0 ">
          <div className="flex h-[32px] items-center">
            <div
              className=" w-[77px] h-[32px]
                 text-right"
            >
              <p className="font-bold text-bold-m"> پروژه اول</p>
            </div>
            <div className="w-6 border border-gray-primary rotate-90"></div>
            <NavLink to="list" className="flex items-center w-36 h-8 gap-1">
              <TiThList size={24}/>
              <p className="text-bold-m">نمایش لیستی</p>
            </NavLink>
            <div className="w-6 border border-gray-primary rotate-90"></div>
            <NavLink to="board" className="flex items-center w-36 h-8 gap-1">
              <MdOutlineDashboard size={24}/>
              <p className="text-bold-m">نمایش ستونی</p>
            </NavLink>
            <div className="w-6 border border-gray-primary rotate-90"></div>
            <NavLink to="calendar" className="flex items-center w-16 h-8 gap-1">
              <LuCalendarDays size={24}/>
              <p className="text-bold-m">تقویم</p>
            </NavLink>
            <div className="w-6 border border-gray-primary rotate-90"></div>
          </div>
          <div>
            <button className="flex h-8" onClick={() => setShowModal(true)}>
              <IoShareSocialOutline size={24}/>
              <span className="text-bold-m">اشتراک گذاری</span>
            </button>
          </div>
        </div>
        <div className="h-12 flex gap-xl items-center">
          <div>
            <Searchbar
              className="h-10 w-52 bg-[#F6F7F9] text-xs text-right pr-1"
              placeholder="جستجو بین تسک ها"
            />
          </div>
          <div className="h-6 border border-gray-primary"></div>
          <div className="flex justify-between flex-grow">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2 items-center">
                  <LuSettings2 className="h-6 w-h-6" />
                  <p>فلیترها</p>
                </div>
                <div className="flex gap-1 py-1 px-3 text-body-xs bg-[#D0EBFF] text-blue-primary rounded-md">
                  <p>دسته بندی شده با:</p>
                  <p>وضعیت</p>
                </div>
              </div>
            </div>
            <div className="flex text-body-xs w-52 rounded-lg border border-brand-primary items-center justify-center gap-2 py-1 px-2">
              <IoRefreshOutline className="w-5 h-5" />
              <p>بازگردانی تسک های آرشیو شده</p>
            </div>
          </div>
        </div>
      </div>
      {showModal && <ShareProject setShowModal={setShowModal} />}
    </div>
  );
};

export default SidebarHeader;
