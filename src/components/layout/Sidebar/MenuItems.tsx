import { MenuItem } from "react-pro-sidebar";
import { BsThreeDots } from "react-icons/bs";
import { useProjects } from "../../../hooks/useProject";
import { ColumnMoreproject, NewProject } from "../../common/Modals";
import { useState } from "react";
import { useDataStore } from "../../../store";
import { useNavigate } from "react-router-dom";

const MenuItems: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNewProject, setNewProject] = useState(false);
  // const [display, setDisplay] = useState("visible");
  const { data: projects } = useProjects();
  const setProjectId = useDataStore((s) => s.setProjectId);
  const navigate = useNavigate();
  return (
    <>
      {projects?.map((project, index) => (
        <MenuItem
          onClick={() => {
            setProjectId(project.id!);
            navigate("/board");
          }}
          key={index}
        >
          <div className="flex justify-between">
            <div>{project.name}</div>
            <div>
              <BsThreeDots
                onClick={() => {
                  setShowModal(true), console.log("clicked");
                }}
              />
            </div>
          </div>
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
        onClick={() => setNewProject(true)}
      >
        ساختن پروژه‌ی جدید
      </button>
      {showModal && <ColumnMoreproject setColumnMore={setShowModal} />}
      {showNewProject && <NewProject setShowModal={setNewProject} />}
    </>
  );
};

export default MenuItems;
