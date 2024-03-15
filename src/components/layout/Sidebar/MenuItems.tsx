import { MenuItem } from "react-pro-sidebar";
import { BsThreeDots } from "react-icons/bs";
import { useProjects } from "../../../hooks/useProject";
import { ColumnMoreproject } from "../../common/Modals";
import { useState } from "react";

const MenuItems: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  // const [display, setDisplay] = useState("visible");
  const { data: projects } = useProjects();

  return (
    <>
      {projects?.map((project, index) => (
        <MenuItem key={index}>
          <div className="flex justify-between">
            <div>{project.name}</div>
            <div>
              <BsThreeDots onClick={() => setShowModal(true)} />
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
        onClick={() => setShowModal(true)}
      >
        ساختن پروژ جدید
      </button>
      {showModal && <ColumnMoreproject setColumnMore={setShowModal} />}
    </>
  );
};

export default MenuItems;
