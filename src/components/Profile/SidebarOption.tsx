import React, { ReactNode } from "react";

interface Props {
  label: string;
  selectedTab: boolean;
  onClick: (tab: string) => void;
  children: ReactNode;
}

const SidebarOption: React.FC<Props> = ({
  label,
  selectedTab,
  onClick,
  children,
}) => {
  return (
    <div
      className={`cursor-pointer w-[266px] py-[8px] px-[10px] mb-[20px] rounded flex items-center gap-2 text-[18px] ${
        selectedTab ? "bg-brand-secondary font-bold " : "font-body"
      }`}
      onClick={() => onClick("personalInfo")}
    >
      {children}
      <span>{label}</span>
    </div>
  );
};

export default SidebarOption;
