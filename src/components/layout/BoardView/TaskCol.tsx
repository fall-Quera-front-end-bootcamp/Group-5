import { Droppable } from "react-beautiful-dnd";
import BoardHeader from "./BoardHeader";
import TaskBox from "./TaskBox";
import { BoardType, TaskType } from "../../../entities/Workspace";

const TaskCol: React.FC<BoardType> = ({
  id,
  name,
  order,
  tasks,
  tasks_count,
  color,
}) => {
  return (
    <Droppable droppableId={String(id)}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex flex-col gap-4"
        >
          <BoardHeader name={name} tasks_count={tasks_count} color={color} />
          {tasks && tasks.map((task: TaskType, index) => (
            <TaskBox key={task.id} {...task} index={index} />
          ))}
        </div>
      )}
    </Droppable>
  );
};

export default TaskCol;
