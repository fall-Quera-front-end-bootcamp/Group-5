import { IoClose } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineColorLens } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import { TiPlus } from "react-icons/ti";
import { ShareWorkSpace, ShareProject } from ".";
import { useState } from "react";
type ColumnMoreType = {
  setColumnMore: (showModal: boolean) => void;
};

const ColumnMoreproject: React.FC<ColumnMoreType> = ({ setColumnMore }) => {
  const [showModal, setShowModal] = useState(false);
  const [showNewTask, setNewTask] = useState(false);
  const [display, setDisplay] = useState("visible");
  useLockBodyScroll();
  //   const [name, setName] = useState("");

  //   const { mutate } = useAddProject();

  //   const handleCreateProject = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     mutate({ name });
  //     setShowModal(false);
  //   };

  return (
    <>
      <div
        className={`fixed inset-0 z-30 flex items-center justify-center ${display} `}
      >
        <div className="w-[250px] bg-white text-black font-body rounded-xl p-5 flex flex-col">
          <div className="flex flex-row-reverse">
            <button
              className="text-xl hover:text-red-primary hover:rotate-90 transition-all"
              type="button"
              onClick={() => setColumnMore(false)}
            >
              <IoClose size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-full" onClick={() => setNewTask(true)}>
              <div>
                <TiPlus className="text-heading-m block m-auto ml-2 " />
              </div>
              <div className="text-l font-bold text">ساخت تسک جدید</div>
            </div>
            <div className="flex w-full">
              <div>
                <BiSolidEdit className="text-heading-m block m-auto ml-2 " />
              </div>
              <div className="text-l font-bold text">ویرایش نام پروژه</div>
            </div>
            <div className="flex w-full">
              <div>
                <FaLink className="text-heading-m block m-auto ml-2 " />
              </div>
              <div className="text-l font-bold text">کپی لینک</div>
            </div>
            <div className="flex w-full">
              <div>
                <RiDeleteBin6Line className="text-heading-m text-red-primary block m-auto ml-2 " />
              </div>
              <div className="text-l font-bold text">حذف</div>
            </div>

            <button
              className="w-full h-[40px] transition-all bg-brand-primary hover:bg-teal-primary text-white rounded"
              onClick={() => {
                setShowModal(true), setDisplay("invisible");
              }}
            >
              <div className="flex w-full p-2">
                <div>
                  <GoShareAndroid className="text-heading-m block m-auto ml-2 grow " />
                </div>
                <div className="flex items-center justify-center text-l font-bold text ">
                  اشتراک گذاری
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ShareWorkSpace setShowModal={setShowModal} setDisplay={setDisplay} />
      )}
      {showNewTask && (
        <ShareProject setShowModal={setNewTask} setDisplay={setDisplay} />
      )}
      <div className="fixed inset-0 z-20 bg-black opacity-50" />
    </>
  );
};

export default ColumnMoreproject;
