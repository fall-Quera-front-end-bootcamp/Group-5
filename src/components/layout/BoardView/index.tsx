import { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import { BoardType } from "../../../entities/Workspace";
import { useBoards } from "../../../hooks/useBoard";
import { useDataStore } from "../../../store";
import CreateBoard from "./CreateBoard";
import TaskCol from "./TaskCol";
import { NewBoard } from "../../common/Modals/index";

const BoardView = () => {
  const [showModal, setShowModal] = useState(false);
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
        {boards?.map((board, index) => (
          <TaskCol key={index} board={board} />
        ))}
        <button onClick={() => setShowModal(true)}>
          <CreateBoard />
        </button>

        {showModal && <NewBoard setShowModal={setShowModal} />}
      </div>
    </DragDropContext>
  );
};

export default BoardView;
