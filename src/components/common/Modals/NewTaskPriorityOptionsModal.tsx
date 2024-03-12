import TaskPriority from "../TaskPriority/TaskPriority";
import { TaskPriorityEnum } from "../TaskPriority/TaskPriority";
import { IoClose } from "react-icons/io5";

const NewTaskPriorityOptionsModal: React.FC = () => {
  const priorities: ("high" | "medium" | "low" | "immediate")[] = [
    "immediate",
    "high",
    "medium",
    "low",
  ];

  return (
    <>
      <div className="flex flex-col p-2">
        <div className="flex flex-wrap pb-5">
          {priorities.map((p, index) => (
            <div className="flex w-full p-1">
              <div className="pl-2">
                <TaskPriority priority={p} key={index} />
              </div>
              <p className="text-xl font-bold"> {TaskPriorityEnum[p].name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {" "}
          <p className="text-xl font-bold text-[#534D60]">حذف اولیت</p>
          <button
            className="text-3xl hover:text-red-primary hover:rotate-90 transition-all"
            type="button"
          >
            <IoClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default NewTaskPriorityOptionsModal;
