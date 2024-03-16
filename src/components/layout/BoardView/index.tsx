import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { DropResult } from "react-beautiful-dnd";
import CreateBoard from "./CreateBoard";
import TaskCol from "./TaskCol";
import { useBoards } from "../../../hooks/useBoard";
import { BoardType } from "../../../entities/Workspace";
import useAuth from "../../../hooks/useAuth";
import { useDataStore } from "../../../store";
import { useNavigate } from "react-router-dom";

const BoardView = () => {
  const navigate = useNavigate();
  const { data: boards } = useBoards();
  const { workspaceId, projectId } = useDataStore((s) => s.params);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }
  };

  useEffect(() => {
    if (!workspaceId && !projectId) navigate("/");
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4">
        {boards?.map(
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
