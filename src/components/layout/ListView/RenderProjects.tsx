import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { DataObjectType } from "./Listview";
import { RenderTasks } from "./RenderTasks";

type RenderProjectsType = {
  Projects: DataObjectType;
};

export const RenderProjects: React.FC<RenderProjectsType> = ({ Projects }) => {
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <div key={Projects.project_name} className="w-full">
        <h2
          key={Projects.project_name}
          onClick={toggleCollapsed}
          className="text-heading-l
               font-heading flex flex-row
               "
        >
          <IoIosArrowDropdown className="mt-2.5 ml-2" />
          {Projects.project_name}
        </h2>

        {collapsed ? (
          <div className="transition-opacity duration-500 opacity-0 "></div>
        ) : (
          <div
            className="mr-3
                  transition-opacity
                  duration-500 opacity-100
                  "
          >
            <RenderTasks allTasks={Projects.tasks} status={"pending"} />
            <RenderTasks allTasks={Projects.tasks} status={"inprogress"} />
            <RenderTasks allTasks={Projects.tasks} status={"done"} />
          </div>
        )}
      </div>
    </>
  );
};
