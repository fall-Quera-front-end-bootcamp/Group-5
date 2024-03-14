import { MenuItem } from "react-pro-sidebar";
import { useProjects } from "../../../../hooks/useProject";
import NewProjectModal from "../../../common/Modals/NewProjectModal";
import { useState } from "react";

interface Props {
  workspaceId: string;
}

const RenderMenuItems: React.FC<Props> = ({ workspaceId }) => {
  const [showModal, setShowModal] = useState(false);
  const { data: projects } = useProjects(workspaceId);

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
      {showModal && (
        <NewProjectModal
          setShowModal={setShowModal}
          workspaceId={workspaceId}
        />
      )}
    </>
  );
};

export default RenderMenuItems;
