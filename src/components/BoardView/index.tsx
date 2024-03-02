import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd"
import { DropResult } from "react-beautiful-dnd";
import TaskCol from "../TaskCol";

import { taskData } from "../../Data";

type tasksType = {
  id: number,
  img: string,
  title: string,
  caption: string
}[]

type taskHeaderType = {
  id: number,
  title: string,
  taskIds: number[]
}

const BoardView = () => {
  const [taskHeaders, setTaskHeaders] = useState(taskData.taskHeaders);
  const tasks = taskData.tasks

  const handleDragEnd = (result: DropResult):void => {
    const { destination, source, draggableId } = result;
  
    if(!destination || (source.droppableId === destination.droppableId && source.index === destination.index)){
      return;
    }
  
    const newTaskHeaders = taskHeaders.map((Col) => {
      let newTaskIds = [...Col.taskIds];
      if(Col.id === Number(source.droppableId)){
        newTaskIds.splice(source.index, 1);
      }
      if(Col.id === Number(destination.droppableId)){
        newTaskIds.splice(destination.index, 0, Number(draggableId));
      }
      
      return {...Col, taskIds: newTaskIds};
    })
    
    setTaskHeaders(newTaskHeaders);
  }

  const givenTasks = (taskIds:number[]):tasksType => {
    return taskIds.map(id => tasks.find(task => task.id === id) as tasksType[0]) as tasksType;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4">
        {taskHeaders.map((taskHeader: taskHeaderType) => (
          <TaskCol key={taskHeader.id} id={taskHeader.id} header={taskHeader.title} tasks={givenTasks(taskHeader.taskIds)} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default BoardView;