import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd"
import TaskCol from "../TaskCol";

import { taskData } from "../../Data";

type tasks = {
  id: number,
  img: string,
  title: string,
  caption: string
}[]

const BoardView = () => {
  const [taskHeaders, setTaskHeaders] = useState(taskData.taskHeaders);
  const tasks = taskData.tasks

  // const onDragEnd = (result: any) => {
  //   const { destination, source, draggableId } = result;
  // }

  const givenTasks = (taskIds:number[]):tasks => {
    return taskIds.map(id => tasks.find(task => task.id === id) as tasks[0]) as tasks;
  }

  return (
    <div className="flex gap-4">
      {/* <DragDropContext onDragEnd={BoardView}> */}
        {/* <TaskCol data={exampleData} /> */}
        {taskHeaders.map((taskHeader: any) => (
          <TaskCol key={taskHeader.id} tasks={givenTasks(taskHeader.taskIds)} header={taskHeader.title} />
        ))}
      {/* </DragDropContext> */}
    </div>
  );
}

export default BoardView;