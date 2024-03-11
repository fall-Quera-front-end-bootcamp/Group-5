import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/MySideBar";
import SidebarHeader from "../Sidebar/SidebarHeader";

interface MainLayoutProps {
  Displayheader: boolean;
}
const MainLayout = ({ Displayheader }: MainLayoutProps) => {
  return (
    <div className="flex flex-row gap-s ">
      <Sidebar className=" h-12" />
      <div className="flex flex-col mt-[41px] ">
        {Displayheader && (
          <>
            <SidebarHeader className=" h-1/6 flex" />
          </>
        )}

        <div className=" pb-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
