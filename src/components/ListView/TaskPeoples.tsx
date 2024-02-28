import React from "react";
type TaskPeople = {
  images: string[];
};

export const TaskPeoples: React.FC<TaskPeople> = ({ images }) => {
  return (
    <div className="relative">
      {images.map((e: string, index) => {
        console.log(index);
        return (
          <img
            src={e}
            className={`absolute  top-${index} left-${
              index
            } z-${index} rounded-full border-2 w-[50px]`}
          />
        );
      })}
    </div>
  );
};
