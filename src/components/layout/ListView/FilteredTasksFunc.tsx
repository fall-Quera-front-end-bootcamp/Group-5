import { taskType } from ".";
import { taskStatusType } from "./Header";

type FilteredTasksFuncType = {
  allTasks: taskType[];
  status: taskStatusType;
};

const FilteredTasksFunc = ({
  allTasks,
  status,
}: FilteredTasksFuncType): [taskType[], string] => {
  /// based on what status we give this filter the task will filtered
  const FilteredTasks = allTasks.filter(
    (CheckTask: taskType) => CheckTask.status == status
  );

  /// based on what status we give these codes define the colors
  let color = "";
  if (status == "pending") color = "bg-pink-primary";
  else if (status == "inprogress") color = "bg-orange-primary";
  else if (status == "done") color = "bg-green-primary";

  return [FilteredTasks, color];
};
export default FilteredTasksFunc;
