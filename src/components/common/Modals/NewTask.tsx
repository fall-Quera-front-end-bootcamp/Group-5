import { useState } from "react";
import { BsCalendarDate, BsFlag, BsPersonAdd } from "react-icons/bs";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { SlPaperClip } from "react-icons/sl";
import Popup from "reactjs-popup";
import { PriorityOptions, AddTag } from ".";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import useDropFile from "../../../hooks/useDropFile";
import { CalendarModal } from "..";
import { useAddTask } from "../../../hooks/useTask";

type PropsType = {
  setShowModal: (showModal: boolean) => void;
  order: number;
};

const NewTask: React.FC<PropsType> = ({ setShowModal, order }) => {
  useLockBodyScroll();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showCalendar, SetShowCalendar] = useState(false);
  const {
    previewImage: perviewFile,
    getRootProps: getRootPropsFile,
    getInputProps: getInputPropsFile,
  } = useDropFile();

  const {
    previewImage: previewCover,
    getRootProps: getRootPropsCover,
    getInputProps: getInputPropsCover,
  } = useDropFile();

  const { mutate } = useAddTask();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({
      name,
      description,
      priority: order,
      order: order,
    });
    setShowModal(false);
  };

  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-30">
        <div className="w-9/12">
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-5 w-full h-full bg-white text-[#1E1E1E] font-body p-8 rounded-3xl shadow-lg"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 bg-[#d9d9d9]" />
                <input
                  className="outline-none text-body-xl"
                  placeholder="عنوان تسک"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <button
                className="text-3xl hover:text-red-primary hover:rotate-90 transition-all"
                type="button"
                onClick={() => setShowModal(false)}
              >
                <IoClose />
              </button>
            </div>
            <div>
              <textarea
                placeholder="توضیحاتی برای این تسک بنویسید"
                className="outline-none text-body-m w-full h-48 rounded-2xl p-5 border-solid border-2 border-[#E2E2E2]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="text-body-l">افزودن پیوست</p>
              <div
                {...getRootPropsFile()}
                className="cursor-pointer text-body-m rounded-md border-2 py-[5px] px-[8px] w-auto flex justify-start items-center gap-2"
              >
                <input {...getInputPropsFile()} />
                <span className="text-brand-primary text-2xl">
                  <SlPaperClip />
                </span>
                <p>آپلود فایل</p>
              </div>
              <p className="text-body-l">{perviewFile?.name}</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-body-l">افزودن کاور</p>
              <div
                {...getRootPropsCover()}
                className="flex justify-start items-center gap-2 w-auto px-[8px] py-[5px] cursor-pointer text-body-m rounded-md border-2"
              >
                <input {...getInputPropsCover()} />
                <span className="text-brand-primary text-2xl">
                  <SlPaperClip />
                </span>
                <p>آپلود فایل</p>
              </div>
              <p className="text-body-l">{previewCover?.name}</p>
            </div>
            <div className="flex justify-between items-center gap-5 mt-8">
              <div className="flex justify-between items-center gap-5">
                <Popup
                  trigger={
                    <div className="cursor-pointer text-[#C1C1C1] text-xl border-dashed border-2 border-[#C1C1C1] rounded-full p-2">
                      <BsFlag />
                    </div>
                  }
                  position={"right center"}
                >
                  <PriorityOptions />
                </Popup>

                <div className="cursor-pointer text-[#C1C1C1] text-xl border-dashed border-2 border-[#C1C1C1] rounded-full p-2">
                  <BsCalendarDate />
                </div>

                <Popup
                  trigger={
                    <div className="cursor-pointer text-[#C1C1C1] text-xl border-dashed border-2 border-[#C1C1C1] rounded-full p-2">
                      <CiBookmarkPlus />
                    </div>
                  }
                  position={"left center"}
                  contentStyle={{
                    width: "350px",
                    margin: "auto",
                    background: "rgb(255, 255, 255)",
                    padding: "25px",
                  }}
                >
                  <AddTag />
                </Popup>
              </div>
              <button
                className="w-[125px] h-8 bg-brand-primary hover:bg-teal-primary text-white font-body text-xs px-2 py-1 rounded shadow hover:shadow-lg ease-linear transition-all duration-150"
                type="submit"
              >
                ساخت تسک
              </button>
            </div>
          </form>
        </div>
      </div>
      {showCalendar && <CalendarModal setShowCalendar={SetShowCalendar} />}
      <div className="opacity-50 fixed inset-0 z-10 bg-black" />
    </>
  );
};

export default NewTask;
