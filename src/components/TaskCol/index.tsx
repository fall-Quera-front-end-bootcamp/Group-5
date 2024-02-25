import TaskHeader from "../TaskHeader";
import TaskBox from "../TaskBox";

function TaskCol() {
  return (
    <div>
      <TaskHeader/>
      <TaskBox/>
      <TaskBox/>
      <TaskBox/>
    </div>
  );
}

export default TaskCol;