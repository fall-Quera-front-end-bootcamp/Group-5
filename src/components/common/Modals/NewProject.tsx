import { useState } from "react";
import { IoClose } from "react-icons/io5";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import { useAddProject } from "../../../hooks/useProject";

type NewProjectType = {
  setShowModal: (showModal: boolean) => void;
  setDisplay: (display: string) => void;
};

const NewProject: React.FC<NewProjectType> = ({ setShowModal, setDisplay }) => {
  useLockBodyScroll();
  const [name, setName] = useState("");

  const { mutate } = useAddProject();

  const handleCreateProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ name });
    setShowModal(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-30 flex items-center justify-center">
        <div className="w-[470px] bg-white text-black font-body rounded-xl p-5 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <button
              className="text-2xl hover:text-red-primary hover:rotate-90 transition-all flex-none"
              type="button"
              onClick={() => {
                setShowModal(false), setDisplay("visible");
              }}
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-center grow font-heading text-heading-s">
              ساختن پروژه جدید‌
            </h2>
          </div>
          <form className="flex flex-col gap-2" onSubmit={handleCreateProject}>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="workspace-name"
                className="self-start text-center text-body-s"
              >
                نام پروژه
              </label>
              <input
                id="workspace-name"
                className="h-10 w-full rounded-lg border border-[#AAAAAA] outline-none overflow-hidden p-3 bg-gray-100"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-10 transition-all bg-brand-primary hover:bg-teal-primary text-white font-heading text-body-s font-extrabold rounded-lg"
            >
              ایجاد پروژه
            </button>
          </form>
        </div>
      </div>
      <div className="fixed inset-0 z-10 bg-black opacity-50" />
    </>
  );
};

export default NewProject;
