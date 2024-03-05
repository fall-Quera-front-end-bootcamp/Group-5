import { CiSquarePlus } from "react-icons/ci";
import { Droppable } from "react-beautiful-dnd"
import TaskHeader from "./TaskHeader";
import TaskBox from "./TaskBox";

type taskType = {
  id: number,
  img: string,
  title: string,
  caption: string
}

type taskColType = {
  id: number,
  header: string,
  tasks: taskType[]
}

const TaskCol: React.FC<taskColType> = ({id, header, tasks}) => {
  return (
    <Droppable droppableId={String(id)}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex flex-col gap-4"
        >
          <TaskHeader title={header} numOfTasks={tasks.length} />
          <div
            className="flex justify-center items-center gap-[10px] border-2 border-brand-primary py-2 px-3 rounded-lg cursor-pointer"
            {...provided.droppableProps}
          >
            <CiSquarePlus size={24} color="#208D8E" />
            <p className="text-brand-primary font-bold">ساخت تسک جدید</p>
          </div>
          {tasks.map((task: taskType, index) => (
            <TaskBox key={task.id} {...task} index={index} />
          ))}

        </div>
      )}
    </Droppable>
  );
}

export default TaskCol;