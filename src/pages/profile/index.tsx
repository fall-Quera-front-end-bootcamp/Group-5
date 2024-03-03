import { useState } from "react";
import { Account, Personal, Settings, Sidebar } from "../../components";
import useProfile from "../../hooks/useProfile";

const Profile = () => {
  const [tab, setTab] = useState<string>("personalInfo");

  const { title } = useProfile(tab);

  return (
    <div className="h-screen flex">
      {/* slide */}
      <Sidebar tab={tab} setTab={setTab} />
      {/* main */}
      <div className="mt-[80px] mx-[60px] w-[354px]">
        <h3 className="font-body text-[31px] mb-[40px]">{title}</h3>

        {tab === "personalInfo" && <Personal tab={tab} />}
        {tab === "accountInfo" && <Account tab={tab} />}
        {tab === "settings" && <Settings tab={tab} />}
      </div>
    </div>
  );
};

export default Profile;
