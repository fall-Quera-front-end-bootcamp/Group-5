import React from "react";

interface Props {
  color: string;
  selected?: boolean;
}

const ColorOption: React.FC<Props> = ({ color, selected }) =>
  selected ? (
    <div
      className={`rounded-xl w-[28px] h-[28px] flex justify-center items-center ${color}`}
    >
      <div className="rounded-lg w-[12px] h-[12px] bg-white" />
    </div>
  ) : (
    <div className={`rounded-lg w-[20px] h-[20px] ${color}`} />
  );
export default ColorOption;
