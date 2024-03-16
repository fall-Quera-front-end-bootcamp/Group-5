import { useState, useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { DropResult } from "react-beautiful-dnd";
import CreateBoard from "./CreateBoard";
import TaskCol from "./TaskCol";
import { useBoards } from "../../../hooks/useBoard";

// delete at the end
// import { taskData } from "../../../data/TaskData";

const BoardView = () => {
  const Boards = useBoards().data;
  // const [taskHeaders, setTaskHeaders] = useState(taskData.taskHeaders);
  // const tasks = taskData.tasks;

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source, draggableId } = result;

      if (
        !destination ||
        (source.droppableId === destination.droppableId &&
          source.index === destination.index)
      ) {
        return;
      }

      const newTaskHeaders = taskHeaders.map((Col) => {
        let newTaskIds = [...Col.taskIds];
        if (Col.id === Number(source.droppableId)) {
          newTaskIds.splice(source.index, 1);
        }
        if (Col.id === Number(destination.droppableId)) {
          newTaskIds.splice(destination.index, 0, Number(draggableId));
        }

        return { ...Col, taskIds: newTaskIds };
      });

      setTaskHeaders(newTaskHeaders);
    },
    [taskHeaders, setTaskHeaders, tasks]
  );

  // const givenTasks = useCallback((taskIds: number[]): tasksType => {
  //   return taskIds.map(id => tasks.find(task => task.id === id) as tasksType[0]) as tasksType;
  // }, [tasks]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4">
        {taskHeaders.map((taskHeader: taskHeaderType) => (
          <TaskCol
            key={taskHeader.id}
            id={taskHeader.id}
            header={taskHeader.title}
            tasks={givenTasks(taskHeader.taskIds)}
          />
        ))}
        <CreateBoard />
      </div>
    </DragDropContext>
  );
};

export default BoardView;
