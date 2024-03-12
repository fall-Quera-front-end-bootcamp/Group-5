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
      <div className="flex flex-wrap mt-[41px]">
        <div className="grow ">{Displayheader && <SidebarHeader />} </div>

        <div className="w-full pb-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
//mohammadreza
{
  /* <div className='flex flex-wrap gap-s'>
<Sidebar  className="w-96 h-12"/>
{Displayheader && <><SidebarHeader className='grow h-1/6 ml-[40px] mt-[41px]' />  
<div className='basis-[100%] h-5/6'></div> </>}

<div className='mr-[400px] pb-5'>
  <Outlet />
</div>
</div> */
}

//ali
{/* <div className="flex gap-s">
<Sidebar className="h-12" />
<div className="flex flex-wrap mt-[41px]">
  <div className="grow ">{Displayheader && <SidebarHeader />} </div>

  <div className="w-full pb-5">
    <Outlet />
  </div>
</div>
</div> */}