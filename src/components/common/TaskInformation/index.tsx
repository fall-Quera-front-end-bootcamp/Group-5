import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { IoMdClose } from "react-icons/io";
import TaskDetail from "./TaskPreview";
import TaskTitle from "./TaskDetail";
import Comment from "./Comment";
import TaskComments from "./TaskComments";

function TaskInformation() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-[1352px] h-[596px] bg-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] flex flex-col">
          <div
            className="fixed top-[36px] right-[50px] hover:scale-125 "
            onClick={handleClose}
          >
            <IoMdClose className="h-[24px] w-[24px]" color="#BDBDBD" />
          </div>

          <div className="flex absolute top-[90px] right-[50px] w-[1302px] h-[506px]">
            <div className="w-full h-full flex">
              <div className="w-1/2 flex flex-col justify-between">
                <TaskDetail />
                <div className=" basis-9/12">
                  <TaskTitle />
                </div>
              </div>
              <div className="w-1/2 flex flex-col justify-between ">
                <div className="flex gap-m pr-[20px] pl-[36px] pt-2 basis-1/12">
                  <div className="flex flex-col ">
                    <p className="font-body text-body-xs text-[#BBBBBB]">ساخته شده در:</p>
                    <p className="font-body text-body-m text-[#1E1E1E]">1 اردیبهشت 1402</p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="font-body text-body-xs text-[#BBBBBB]">ددلاین</p>
                    <p className="font-body text-body-m text-[#1E1E1E]">پس فردا</p>
                  </div>
                </div>
                <div className="w-full flex flex-col  justify-between basis-10/12">
                  <TaskComments />
                  <Comment />
                </div>

              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TaskInformation;