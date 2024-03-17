import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { BoardMore, NewTask } from "../../common/Modals";
import { useGetBgColor } from "../../../services/ColorsService";
import { useDataStore } from "../../../store";
import { BoardType } from "../../../entities/Workspace";

const BoardHeader: React.FC<BoardType> = (props) => {
  const { id, name, tasks_count, color } = props;
  const [showPlusModal, setShowPlusModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const borderColor = `border-${useGetBgColor(color)}`;
  const setBoardId = useDataStore((s) => s.setBoardId);

  return (
    <div
      style={{
        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.2)",
      }}
      className={`w-[250px] h-[40px] py-2 px-3 bg-white rounded-3xl border-t-2 font-body flex justify-between ${borderColor}`}
    >
      <div className="flex gap-1 items-center">
        <p className="text-body-m">{name}</p>
        <p className="text-body-xs pt-[2px] px-1 bg-gray-100 rounded-[100px]">
          {tasks_count || 0}
        </p>
      </div>
      <div className="relative flex gap-1 items-center">
        <button onClick={() => setShowMore(true)}>
          <span className="hover:text-brand-primary transition-all">
            <HiEllipsisHorizontal />
          </span>
        </button>
        <button
          onClick={() => {
            setShowPlusModal(true);
            setBoardId(id!);
          }}
        >
          <span className="hover:text-brand-primary transition-all">
            <FaPlus />
          </span>
        </button>

        {showMore && <BoardMore setShowModal={setShowMore} />}

        {showPlusModal && (
          <NewTask setShowModal={setShowPlusModal} order={tasks_count!} />
        )}
      </div>
    </div>
  );
};

export default BoardHeader;
