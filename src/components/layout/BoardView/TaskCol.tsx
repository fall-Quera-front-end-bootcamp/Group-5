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

const TaskCol = ({id, header, tasks}:taskColType) => {
  return (
    <Droppable droppableId={String(id)}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex flex-col gap-4"
        >
          <TaskHeader title={header} numOfTasks={tasks.length} />
          {tasks.map((task: taskType, index) => (
            <TaskBox key={task.id} {...task} index={index} />
          ))}

        </div>
      )}
    </Droppable>
  );
}

export default TaskCol;