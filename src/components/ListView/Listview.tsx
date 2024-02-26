import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { CgDetailsMore } from "react-icons/cg";
import Dropdown from "./test";
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

  ///prirory function
  const TaskPriority = (Task_priority: string) => {
    switch (Task_priority) {
      case "high":
        return (
          <CiFlag1 className="text-red-primary text-heading-l block m-auto " />
        );
      case "low":
        return (
          <CiFlag1 className="text-yellow-primary text-heading-l block m-auto" />
        );
    }
  };

  ///////////// the render tasks function
  const RenderTASKS = (AllTasks: Array[], status: string) => {
    const ReTasks = AllTasks.filter((CheckTask) => CheckTask.status == status);
    let color = "";
    if (status == "pending") color = "bg-pink-primary";
    else if (status == "inprogress") color = "bg-orange-primary";
    else if (status == "done") color = "bg-green-primary";
    if (ReTasks.length == 0) {
      return null;
    } else {
      return (
        <div className="p-s">
          <div className="flex flex-row">
            <div className="basis-[50%] flex ">
              <IoIosArrowDropdown className="mt-2.5 ml-2 size-5" />
              <div
                key={ReTasks[0].status}
                className={`${color} text-center
                 text-white 
                 min-w-min rounded-lg 
                 font-heading-l 
                 p-2 `}
              >
                {ReTasks[0].status}
              </div>
            </div>
            <span className="basis-[15%] text-center">اعضا</span>
            <span className="basis-[15%] text-center">ددلاین</span>
            <span className="basis-[15%] text-center">اولویت</span>
            <span className="basis-[15%] text-center">توضیحات</span>
          </div>
          {ReTasks.map((task) => {
            return (
              <div key={task.name} className="flex flex-row p-xs">
                <div className="flex basis-[50%]">
                  <div
                    className={`rounded-lg w-[20px] h-[20px] cursor-pointer ${color} ml-1 mr-5`}
                  ></div>
                  <div key={task.task_name}>{task.task_name}</div>
                </div>

                <div className="basis-[15%]" key={task.peoples}>
                  {task.peoples}
                </div>
                <div className=" basis-[15%] text-center" key={task.deadline}>
                  {task.deadline}
                </div>
                <div className=" basis-[15%] flex flex-col" key={task.priority}>
                  {TaskPriority(task.priority)}
                </div>
                <div
                  className=" basis-[15%] flex flex-col"
                  key={task.description}
                >
                  <Popup
                    trigger={
                      <div className="block m-auto">
                        <CgDetailsMore />
                      </div>
                    }
                    position="right center"
                  >
                    <div>{task.description}</div>
                  </Popup>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
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
                  {RenderTASKS(Projects.tasks, "pending")}
                  {RenderTASKS(Projects.tasks, "inprogress")}
                  {RenderTASKS(Projects.tasks, "done")}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
   
};

export default Listview;
