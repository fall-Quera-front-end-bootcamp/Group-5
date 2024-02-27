import Popup from "reactjs-popup";
import { ListHeader } from "./ListHeader";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";
import { TaskPriority } from "./TaskPriority";

type RenderTask ={
    allTasks:any;
    status:string;
}
  export const RenderTasks:React.FC<RenderTask> = ({allTasks, status}) => {
  const [collapsedStatus, setCollapsedStatus] = useState(true);
  const toggleCollapsedStatus = () => {
    setCollapsedStatus(!collapsedStatus);
  };
    const FilteredTasks = allTasks.filter((CheckTask:any) => CheckTask.status == status);
    let color = "";
    if (status == "pending") color = "bg-pink-primary";
    else if (status == "inprogress") color = "bg-orange-primary";
    else if (status == "done") color = "bg-green-primary";
    if (FilteredTasks.length == 0) {
      return null;
    } else {
      return (
        <div className="p-s">
          <ListHeader status={FilteredTasks[0].status} onToggleCollapseStatus={toggleCollapsedStatus} />
          {collapsedStatus
            ? null
            : FilteredTasks.map((task:any) => {
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
                    <div
                      className=" basis-[15%] text-center"
                      key={task.deadline}
                    >
                      {task.deadline}
                    </div>
                    <div
                      className=" basis-[15%] flex flex-col"
                      key={task.priority}
                    >
                      <TaskPriority priority={task.priority}/>
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