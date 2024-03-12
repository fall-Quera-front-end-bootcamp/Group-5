import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/MySideBar";
import SidebarHeader from "../Sidebar/SidebarHeader";

interface MainLayoutProps {
  Displayheader: boolean;
}

const MainLayout = ({ Displayheader }: MainLayoutProps) => {
  return (
    <div className="flex gap-s">
      <Sidebar className="h-12" />
      <div className="flex flex-wrap w-full mt-10 gap-5">
        <div className="w-full">{Displayheader && <SidebarHeader />}</div>
        <div className="w-full pb-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
