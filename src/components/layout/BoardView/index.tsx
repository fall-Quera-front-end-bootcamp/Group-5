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

  //delete in the end
  const [test, setTest]: any = useState();

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    //source = جایی که ازش بلند شد
    //destination = جایی که بهش رفت
    //draggableId = شناسه تسکی که جابجا شد
    //droppableId = شناسه ستون

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    const newBoards = boards?.map((board) => {
      if(board.tasks === undefined) return
      const taskIds = board.tasks.map((task) => task.id);
      if(board.id === Number(source.droppableId)) {
        taskIds.splice(source.index, 1);
      }
      if(board.id === Number(destination.droppableId)) {
        taskIds.splice(destination.index, 0, Number(draggableId));
      }
      return { ...board, tasks: taskIds };
    });

    // const newBoard = Boards?.map((Col) => {
    //   let newTaskIds = [...Col.taskIds];
    //   if (Col.id === Number(source.droppableId)) {
    //     newTaskIds.splice(source.index, 1);
    //   }
    //   if (Col.id === Number(destination.droppableId)) {
    //     newTaskIds.splice(destination.index, 0, Number(draggableId));
    //   }

    //   return { ...Col, taskIds: newTaskIds };
    // });

    setTest(newBoards);
  };

  useEffect(() => {
    if (!workspaceId && !projectId) navigate("/");
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex items-start gap-4">
        {boards?.map((board, index) => (
          <TaskCol key={index} {...board} />
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
