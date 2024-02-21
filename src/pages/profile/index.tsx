import { useState } from "react";

const Profile = () => {
  const [tab, setTab] = useState("personalInfo");
  return (
    <div>
      {/* aside */}
      <div>
        <h2>logo</h2>
        <button>back</button>
        <div onClick={() => setTab("personalInfo")}>info</div>
        <div onClick={() => setTab("accountInfo")}>account</div>
        <div onClick={() => setTab("settings")}>settings</div>
      </div>
      {/* main */}
      <div>
        <h3>title</h3>
        {tab === "personalInfo" && <div>personal Form</div>}
        {tab === "accountInfo" && <div>account Form</div>}
        {tab === "settings" && <div>theme settings</div>}
      </div>
    </div>
  );
};

export default Profile;
