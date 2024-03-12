import { CiFlag1 } from "react-icons/ci";

export const TaskPriorityEnum = {
  immediate: { name: "فوری", key: "immediate", color: "red-primary" },
  high: { name: "بالا", key: "high", color: "yellow-primary" },
  medium: { name: "متوسط", key: "medium", color: "blue-primary" },
  low: { name: "پایین", key: "low", color: "gray-primary" },
};

type TaskPriorityType = {
  priority: "immediate" | "high" | "medium" | "low";
};
const TaskPriority: React.FC<TaskPriorityType> = ({ priority }) => {
  return (
    
    <CiFlag1
      className={`text-${TaskPriorityEnum[priority].color} text-heading-l block m-auto`}
    />
    
    
  );
};

export default TaskPriority;
