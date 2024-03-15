import { MenuItem } from "react-pro-sidebar";
import { useProjects } from "../../../hooks/useProject";
import {NewProject} from "../../common/Modals";
import { useState } from "react";

const MenuItems: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { data: projects } = useProjects();

  return (
    <>
      {projects?.map((project, index) => (
        <MenuItem key={index}>{project.name}</MenuItem>
      ))}

      <button
        className=" font-body text-body-s
         w-[260px] h-[32px]  
          rounded-[6px]
          flex items-center
          justify-center
          text-cyan-primary
           mr-10
           border
           border-cyan-primary"
        onClick={() => setShowModal(true)}
      >
        ساختن پروژ جدید
        {/* <AddBoxOutlinedIcon /> */}
      </button>
      {showModal && <NewProject setShowModal={setShowModal} />}
    </>
  );
};

export default MenuItems;
