import React from "react";
import { BackButton, SidebarOption, Slide } from "..";
import { BsPersonCheck, BsPersonGear } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";

interface Props {
  tab: string;
  setTab: (tab: string) => void;
}

const Sidebar: React.FC<Props> = ({ tab, setTab }) => {
  return (
    <Slide>
      <BackButton />
      <SidebarOption
        label="اطلاعات فردی"
        selectedTab={tab === "personalInfo"}
        onClick={() => setTab("personalInfo")}
      >
        <BsPersonGear size="22px" />
      </SidebarOption>

      <SidebarOption
        label="اطلاعات حساب"
        selectedTab={tab === "accountInfo"}
        onClick={() => setTab("accountInfo")}
      >
        <BsPersonCheck size="22px" />
      </SidebarOption>

      <SidebarOption
        label="تنظیمات"
        selectedTab={tab === "settings"}
        onClick={() => setTab("settings")}
      >
        <SlSettings size="22px" />
      </SidebarOption>
    </Slide>
  );
};

export default Sidebar;
