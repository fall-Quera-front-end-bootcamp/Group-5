import { useState } from "react";
import Popup from "reactjs-popup";
import { CgDetailsMore } from "react-icons/cg";
import { TaskPriority, TaskPeoples } from "../../common";
import ListHeader from "./Header";
import { taskType } from ".";
import { taskStatusType } from "./Header";
import FilteredTasksFunc from "./FilteredTasksFunc";
type RenderTask = {
  allTasks: taskType[];
  status: taskStatusType;
};
const Tasks: React.FC<RenderTask> = ({ allTasks, status }) => {
  const [collapsedStatus, setCollapsedStatus] = useState(false);
  const toggleCollapsedStatus = () => {
    setCollapsedStatus(!collapsedStatus);
  };
  /// calling the FilteredTasksFunc to give us filtered tasks and color based on status.
  const [FilteredTasks, color] = FilteredTasksFunc({ allTasks, status });

  return (
    <>
      {/* Render the listheader */}
      {FilteredTasks.length == 0 ? (
        <div className="p-s">
          <ListHeader
            numTasks={FilteredTasks.length}
            status={status}
            onToggleCollapseStatus={toggleCollapsedStatus}
          />
        </div>
      ) : (
        <div className="p-s">
          <ListHeader
            numTasks={FilteredTasks.length}
            status={FilteredTasks[0].status as taskStatusType}
            onToggleCollapseStatus={toggleCollapsedStatus}
          />
          {collapsedStatus
            ? null
            : FilteredTasks.map((task: any, index) => {
                return (
                  <div key={index} className="flex flex-row p-xs">
                    <div className="flex basis-[50%]">
                      <div
                        className={`rounded-lg w-[20px] h-[20px] cursor-pointer ${color} ml-1 mr-5`}
                      ></div>
                      <div key={task.task_name}>{task.task_name}</div>
                    </div>
                    {/* Render images of the people who attend to the task */}
                    <div
                      className=" basis-[15%] flex justify-center pl-4"
                      key={task.peoples}
                    >
                      <TaskPeoples images={task.peoples} />
                    </div>
                    {/* Render deadline of each task*/}
                    <div
                      className=" basis-[15%] text-center"
                      key={task.deadline}
                    >
                      {task.deadline}
                    </div>
                    {/* Render priority of task */}
                    <div className=" basis-[15%]" key={task.priority}>
                      <TaskPriority priority={task.priority} />
                    </div>
                    {/* Render the detalis of each task */}
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
      )}
    </>
  );
};
export default Tasks;
