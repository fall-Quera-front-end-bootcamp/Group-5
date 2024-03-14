import { MenuItem } from "react-pro-sidebar";
import { useProjects } from "../../../../hooks/useProject";
import NewProjectModal from "../../../common/Modals/NewProjectModal";
import { useState } from "react";

export const RenderMenuItems: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { data: Projects } = useProjects();
  return (
    <>
      {Projects?.map((project) => (
        <MenuItem key={project.id}>{project.name}</MenuItem>
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
      {showModal && <NewProjectModal setShowModal={setShowModal} />}
    </>
  );
};
