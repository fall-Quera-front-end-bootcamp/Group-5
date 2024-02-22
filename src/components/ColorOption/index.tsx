import React from "react";

interface Props {
  color: string;
}

const ColorOption: React.FC<Props> = ({ color }) => {
  return <div className={`rounded-lg w-[20px] h-[20px] bg-${color}`} />;
};

export default ColorOption;
