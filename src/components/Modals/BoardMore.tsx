import { BsTrash } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { PiArchiveTray } from "react-icons/pi";
import { SlNote } from "react-icons/sl";

type PropsType = {
  setShowModal: (showModal: boolean) => void
}

const BoardMore = ({setShowModal}:PropsType) => {
  return (
    <>
      <ul
        className="absolute top-7 left-2 w-48 mt-1 text-body-s font-normal rounded-lg p-3 z-20 bg-white shadow-lg"
      >
        <li
          className="flex items-center hover:bg-gray-100 p-2 cursor-pointer"
        >
          <span className="text-sm">
            <SlNote />
          </span>
          <p className="mr-2">ویرایش نام ستون</p>
        </li>
        <li
          className="flex items-center hover:bg-gray-100 p-2 cursor-pointer"
        >
          <span className="text-sm">
            <FaPlus />
          </span>
          <p className="mr-2">افزودن تسک</p>
        </li>
        <li
          className="flex items-center hover:bg-gray-100 p-2 cursor-pointer"
        >
          <PiArchiveTray />
          <p className="mr-2">آرشیو تمام تسک‌ها</p>
        </li>
        <li
          className="flex items-center hover:bg-gray-100 p-2 cursor-pointer"
        >
          <span className="text-sm text-red-primary">
            <BsTrash  />
          </span>
          <p className="mr-2 text-red-primary">حذف ستون</p>
        </li>
      </ul>
    </>
  );
};

export default BoardMore;