import TaskHeader from "../TaskHeader";
import TaskBox from "../TaskBox";
import { CiSquarePlus } from "react-icons/ci";

type taskType = {
  id: number,
  img: string,
  title: string,
  caption: string
}

type taskColType = {
  header: string,
  tasks: taskType[]
}

const TaskCol: React.FC<taskColType> = ({header, tasks}) => {
  return (
    <div className="flex flex-col gap-4">
      <TaskHeader title={header} numOfTasks={tasks.length} />
      {tasks.map((task: taskType) => (
        <TaskBox key={task.id} {...task} />
      ))}

      <div className="flex justify-center items-center gap-[10px] border-2 border-brand-primary py-2 px-3 rounded-lg cursor-pointer">
        <CiSquarePlus size={24} color="#208D8E" />
        <p className="text-brand-primary font-bold">ساخت تسک جدید</p>
      </div>
    </div>
  );
}

export default TaskCol;