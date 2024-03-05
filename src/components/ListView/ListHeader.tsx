import { IoIosArrowDropdown } from "react-icons/io";
import { TaskStatusEnum } from "../Task/TaskStatusEnum";

export type taskStatusType = "done" | "pending" | "inprogress";
// export type taskStatusType = string;

type ListHeaderType = {
  status: taskStatusType;
  onToggleCollapseStatus: () => void;
  numTasks: number;
};

export const ListHeader: React.FC<ListHeaderType> = ({
  status,
  onToggleCollapseStatus,
  numTasks,
}) => {
  return (
    <div className="flex flex-row">
      <div className="basis-[50%] flex " onClick={onToggleCollapseStatus}>
        <IoIosArrowDropdown className="mt-2.5 ml-2 size-5" />
        <div
          key={status}
          className={`${TaskStatusEnum[status].color} text-center
                 text-white 
                 min-w-min rounded-lg 
                 font-heading-l 
                 p-2 `}
        >
          {TaskStatusEnum[status].textEn}
        </div>
        <span className="mr-2 mt-2">{numTasks} تسک</span>
      </div>
      <span className="basis-[15%] text-center">اعضا</span>
      <span className="basis-[15%] text-center">ددلاین</span>
      <span className="basis-[15%] text-center">اولویت</span>
      <span className="basis-[15%] text-center">توضیحات</span>
    </div>
  );
};
