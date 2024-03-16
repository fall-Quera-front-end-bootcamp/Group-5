import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { DropResult } from "react-beautiful-dnd";
import CreateBoard from "./CreateBoard";
import TaskCol from "./TaskCol";
import { useBoards } from "../../../hooks/useBoard";
import { BoardType } from "../../../entities/Workspace";

const BoardView = () => {
  const Boards = useBoards().data;

  // test
  const [test, setTest] = useState();

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    // const newBoards = Boards?.map((board) => {})

    // const newTaskHeaders = Boards?.map((Col) => {
    //   let newTaskIds = [...Col.taskIds];
    //   if (Col.id === Number(source.droppableId)) {
    //     newTaskIds.splice(source.index, 1);
    //   }
    //   if (Col.id === Number(destination.droppableId)) {
    //     newTaskIds.splice(destination.index, 0, Number(draggableId));
    //   }

    //   return { ...Col, taskIds: newTaskIds };
    // });

  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4">
        {Boards &&
          Boards.map(
            ({
              id,
              name,
              order,
              tasks,
              tasks_count,
              color,
              is_archive,
            }: BoardType) => (
              <TaskCol
                key={id}
                id={id}
                name={name}
                tasks={tasks}
                tasks_count={tasks_count}
                color={color}
                order={order}
                is_archive={is_archive}
              />
            )
          )}
        <CreateBoard />
      </div>
    </DragDropContext>
  );
};

export default BoardView;
