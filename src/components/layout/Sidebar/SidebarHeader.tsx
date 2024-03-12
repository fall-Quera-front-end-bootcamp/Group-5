import { useState } from "react";
import { TiThList } from "react-icons/ti";
import { FaColumns } from "react-icons/fa";
import { LuCalendarDays, LuSettings2 } from "react-icons/lu";
import { IoShareSocialOutline, IoRefreshOutline } from "react-icons/io5";
import Searchbar from "./Searchbar";
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
            <div className="w-[22px] border-[1px] border-gray-primary rotate-90"></div>
            <div className=" w-[140px] gap-[5px] h-[32px] flex  ">
              <TiThList className="w-[24px] h-[24px]" />
              <p className="font-bold text-bold-m text-brand-primary">
                نمایش لیستی
              </p>
            </div>
            <div className="w-[22px] border-[1px] border-gray-primary rotate-90"></div>
            <div className=" w-[135px] gap-[5px] h-[32px]  flex  ">
              <FaColumns className="w-[24px] h-[24px]" />
              <p className="font-body text-bold-m">نمایش ستونی</p>
            </div>
            <div className="w-[22px] border-[1px] border-gray-primary rotate-90"></div>
            <div className=" w-[70px] gap-[5px] h-[32px] flex  ">
              <LuCalendarDays className="w-[24px] h-[24px]" />
              <p className="font-body text-bold-m">تقویم</p>
            </div>
            <div className="w-[22px] border-[1px] border-gray-primary rotate-90"></div>
          </div>
          <div>
            <button
              className="flex h-8 gap-1"
              onClick={() => setShowModal(true)}
            >
              <IoShareSocialOutline className="w-[24px] h-[24px]" />
              <span className="font-body text-bold-m">اشتراک گذاری</span>
            </button>
          </div>
        </div>
        <div className=" h-[50px] flex gap-xl items-center">
          <div>
            <Searchbar
              className="font-body text-[12px] text-right pr-1 h-[40px] w-[200px] bg-[#F6F7F9] "
              placeholder="جستجو بین تسک ها"
            />
          </div>
          <div className="h-[22px] border-[1px] border-gray-primary "></div>
          <div className="flex justify-between flex-grow">
            <div>
              <div className="flex items-center gap-[16px]">
                <div className="flex gap-[6px] items-center">
                  <LuSettings2 className="h-[24px] w-[24px]" />
                  <p>فلیترها</p>
                </div>
                <div className="flex gap-[2px] font-body text-body-xs text-blue-primary bg-[#D0EBFF] rounded-[4px] py-[4px] px-[12px]">
                  <p>دسته بندی شده با:</p>
                  <p>وضعیت</p>
                </div>
              </div>
            </div>
            <div
              className="flex font-body text-body-xs w-[210px] rounded-[8px] border-[1px]
             border-brand-primary items-center justify-center gap-[8px] py-[4px] px-[8px]"
            >
              <IoRefreshOutline className="w-[20px] h-[20px]" />
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
