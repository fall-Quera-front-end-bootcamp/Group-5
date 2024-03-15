import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/MySideBar";
import SidebarHeader from "../Sidebar/SidebarHeader";
import { VscDiffAdded } from "react-icons/vsc";
import { NewTask } from "../../common/Modals";
import { useState } from "react";

interface MainLayoutProps {
  Displayheader: boolean;
}

const MainLayout = ({ Displayheader }: MainLayoutProps) => {
  const [newTaskOpen, setNewTaskOpen] = useState(false)
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setNewTaskOpen(prevVAl => !prevVAl)
  }
  return (
    <div className="flex relative gap-s">
      <Sidebar className="h-12" />
      <div className="flex flex-wrap w-full mt-10 gap-5">
        <div className="w-full">{Displayheader && <SidebarHeader />}</div>
        <div className="w-full pb-5">
          <Outlet />
        </div>
      </div>
      <div className="absolute top-[850px] left-[50px] w-[111px] h-[40px] bg-brand-primary rounded-md ">
        <button className="h-full w-ful flex items-center justify-center gap-[4px] ml-auto mr-auto" onClick={handleClick}>
        <VscDiffAdded className="text-white h-[20px] w-[20px]"/>
        <p className="text-body-s font-body text-white"> تسک جدید</p>
        </button>
      </div>
      {newTaskOpen && <NewTask setShowModal={(newTaskOpen) => !newTaskOpen}/>}
    </div>
  );
};

export default MainLayout;
