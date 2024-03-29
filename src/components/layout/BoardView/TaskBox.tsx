import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { FaRegComments } from "react-icons/fa6";
import { TaskType } from "../../../entities/Workspace";

interface TaskBoxType extends TaskType {
  index: number;
}

// priority, attachment, order?!

const TaskBox: React.FC<TaskBoxType> = (props) => {
  const { id, name, description, deadline, thumbnail, index} = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsHovered(false)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="w-[250px] break-words bg-white rounded-3xl p-4 flex flex-col gap-4 font-body font-normal"
          style={{
            boxShadow:
              "0px 2px 4px 0px rgba(0, 0, 0, 0.4), 0px 7px 6px -3px rgba(0, 0, 0, 0.3), 0px -3px 0px 0px rgba(0, 0, 0, 0.2) inset",
            ...provided.draggableProps.style,
          }}
        >
          {thumbnail && (
            <img className="rounded-[4px]" src={thumbnail} alt="task's image" />
          )}
          <div className="flex flex-col gap-2 text-body-xs">
            <p className="text-[rgba(83, 77, 96, 1)]">{name}</p>
            <p>{description}</p>
          </div>
          <div className="flex gap-2">{deadline}</div>
          {isHovered && (
            <>
              <hr />
              <div className="flex justify-end hover:text-brand-primary transition-all cursor-pointer">
                <FaRegComments />
              </div>
            </>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskBox;
