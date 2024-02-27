import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { CgDetailsMore } from "react-icons/cg";
import Dropdown from "./test";
import { ListHeader } from "./ListHeader";
import { RenderTasks } from "./RenderTasks";
type taskType = {
  task_name: string;
  peoples: string[];
  status: string;
  deadline: string;
  priority: string;
  description: string;
};
// type DataObjectType = string | tasksType;
type DataObjectType = { project_name: string; tasks: taskType[] };
type DataType = DataObjectType[];

//////// this is a fake data to test
const mocked_data: DataType = [
  {
    project_name: "پروژه اول",
    tasks: [
      {
        task_name: "no-1-1",
        status: "pending",
        peoples: ["ali", "hasan"],
        deadline: "fri",
        priority: "high",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-2",
        status: "pending",
        peoples: ["alireza", "davod"],
        deadline: "mon",
        priority: "high",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-3",
        status: "inprogress",
        peoples: ["ali", "hasan"],
        deadline: "sat",
        priority: "low",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-4",
        status: "done",
        peoples: ["moh", "mosh"],
        deadline: "sun",
        priority: "high",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-5",
        status: "done",
        peoples: ["ali", "hasan"],
        deadline: "fri",
        priority: "high",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
    ],
  },
];

interface DataProps {
  data?: DataType;
}

///// the main component
const Listview: React.FC<DataProps> = ({}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div key={"contain"} className=" w-full h-screen overflow-y-auto mt-2">
      {mocked_data.map((Projects) => {
        return (
          <div className="w-screen">
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
                <RenderTasks allTasks={Projects.tasks} status={'pending'}/>
                <RenderTasks allTasks={Projects.tasks} status={'inprogress'}/>
                <RenderTasks allTasks={Projects.tasks} status={'done'}/>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Listview;
