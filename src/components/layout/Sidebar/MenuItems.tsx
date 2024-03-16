import { MenuItem } from "react-pro-sidebar";
import { useProjects } from "../../../hooks/useProject";
import { NewProject } from "../../common/Modals";
import { useState } from "react";
import { useDataStore } from "../../../store";

const MenuItems: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { data: projects } = useProjects();
  const setProjectId = useDataStore((s) => s.setProjectId);
  return (
    <>
      {projects?.map((project, index) => (
        <MenuItem onClick={() => setProjectId(project.id!)} key={index}>
          {project.name}
        </MenuItem>
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
        ساختن پروژه‌ی جدید
        {/* <AddBoxOutlinedIcon /> */}
      </button>
      {showModal && <NewProject setShowModal={setShowModal} />}
    </>
  );
};

export default MenuItems;
