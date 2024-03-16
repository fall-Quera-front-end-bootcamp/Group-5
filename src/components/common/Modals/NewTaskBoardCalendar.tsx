import { useState } from "react";
import TaskPriority from "../TaskPriority/TaskPriority";
import { NewTask } from "../Modals";
const NewTaskBoardCalendar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap pb-5">
          <div className="w-[300px]">
            <label
              htmlFor="workspace-name"
              className="self-start text-center text-body-s"
            ></label>
            <input
              id="workspace-name"
              className="h-10 w-full rounded-lg border border-[#AAAAAA] outline-none overflow-hidden p-3 bg-gray-100"
              type="text"
              //   value={workspaceName}
              //   onChange={(e) => setWorkspaceName(e.target.value)}
              required
              placeholder="نام تسک را وارد کنید"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="">
            <TaskPriority priority={"low"} />
          </div>
          <div>تاریخ</div>
          <div
            className="
             flex items-center justify-center
              gap-[4px]
              bg-brand-primary rounded-md
              "
            onClick={() => setShowModal(true)}
          >
            <button className="text-body-s font-body text-white px-8">
              تسک جدید
            </button>
          </div>
        </div>
      </div>
      {showModal && <NewTask setShowModal={setShowModal} />}
    </>
  );
};

export default NewTaskBoardCalendar;
