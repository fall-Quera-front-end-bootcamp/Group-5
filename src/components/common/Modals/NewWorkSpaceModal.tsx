import { IoClose } from "react-icons/io5";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import { ColorOption } from "../";
import useColorSelector from "../../../services/ColorsService";

type NewProjectType = {
  setShowModal: (showModal: boolean) => void;
};

const NewWorkspaceModal: React.FC<NewProjectType> = ({ setShowModal }) => {
  useLockBodyScroll();
  const { colors, selectedColor, handleColorChange } = useColorSelector();

  return (
    <>
      <div className="fixed inset-0 z-30 flex items-center justify-center">
        <div className="w-[470px] bg-white text-black font-body rounded-xl p-5 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <button
              className="text-2xl hover:text-red-primary hover:rotate-90 transition-all flex-none"
              type="button"
              onClick={() => setShowModal(false)}
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-center grow font-heading text-heading-s">
              ساختن ورک‌اسپیس جدید‌
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="workspace-name"
              className="self-start text-center text-body-s"
            >
              نام ورک اسپیس
            </label>
            <input
              id="workspace-name"
              className="h-10 w-full rounded-lg border border-[#AAAAAA] outline-none overflow-hidden p-3 bg-gray-100"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="self-start text-center text-body-s">رنگ ورک اسپیس</p>
            <div className="flex flex-wrap justify-center items-center gap-2">
              {colors.map((color, index) => (
                <ColorOption
                  key={index}
                  color={color}
                  selected={color === selectedColor}
                  handleClick={() => handleColorChange(color)}
                />
              ))}
            </div>
          </div>
          <button className="w-full h-10 transition-all bg-brand-primary hover:bg-teal-primary text-white font-heading text-body-s font-extrabold rounded-lg">
            ادامه
          </button>
        </div>
      </div>
      <div className="fixed inset-0 z-10 bg-black opacity-50" />
    </>
  );
};

export default NewWorkspaceModal;
