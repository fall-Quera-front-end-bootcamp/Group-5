import { CiFlag1 } from "react-icons/ci";

const TaskPriorityEnum = {
  high: { key: "high", color: "red" },
  low: { key: "low", color: "yellow" },
};

type TaskPriorityType = {
  priority: "high" | "low";
};
export const TaskPriority: React.FC<TaskPriorityType> = ({ priority }) => {
  return (
    <CiFlag1
      className={`text-${TaskPriorityEnum[priority].color}-primary text-heading-l block m-auto`}
    />
  );
};
