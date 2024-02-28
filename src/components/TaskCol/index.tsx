import TaskHeader from "../TaskHeader";
import TaskBox from "../TaskBox";

function TaskCol({data}:any) {
  return (
    <div>
      <TaskHeader title={data.header} numOfTasks={data.tasks.length} />
      {data.tasks.map((task: any) => (
        <TaskBox key={task.id} {...task} />
      ))}
    </div>
  );
}

export default TaskCol;