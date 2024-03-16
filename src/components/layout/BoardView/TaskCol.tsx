import { Droppable } from "react-beautiful-dnd";
import BoardHeader from "./BoardHeader";
import TaskBox from "./TaskBox";
import { BoardType, TaskType } from "../../../entities/Workspace";
import { useQueryClient } from "@tanstack/react-query";
import { useDataStore } from "../../../store";

// is_archive???
interface Props {
  board: BoardType;
}

const TaskCol: React.FC<Props> = ({ board }) => {
  const { id, tasks } = board;
  const { workspaceId, projectId } = useDataStore((s) => s.params);
  const cacheKey = [
    "workspaces",
    workspaceId,
    "projects",
    projectId,
    "boards",
    id,
    "tasks",
  ];
  const queryClient = useQueryClient();
  if (tasks?.length! > 0)
    queryClient.setQueryData<TaskType[]>(cacheKey, () => [...tasks!]);

  return (
    <Droppable droppableId={String(id)}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex flex-col gap-4"
        >
          <BoardHeader board={board} />
          {tasks?.map((task, index) => (
            <TaskBox key={task.id} {...task} index={index} />
          ))}
        </div>
      )}
    </Droppable>
  );
};

export default TaskCol;
