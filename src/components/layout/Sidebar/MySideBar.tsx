import { Sidebar } from "react-pro-sidebar";

import ProfilePreview from "./ProfilePreview";
import ExitButton from "./ExitButton";
import ThemeButton from "./ThemeButton";


import { RenderWorkSpacesInSideBar } from "./SideBarComponents/RenderWorkSpacesInSideBar";

interface MySideBarProps {
  className: string;
}

const MySidebar = ({ className }: MySideBarProps) => {


  
  return (
    <div className={className}>
      <RenderWorkSpacesInSideBar />
      <div>
        <Sidebar
          rtl={true}
          className="\font-body  mr-[40px]"
          width="340px"
          backgroundColor="white"
        >
          <div className="flex flex-col  place-self-start w-[276px] h-[85px] mb-[40px]">
            <div className="place-self-start">
              <ProfilePreview />
            </div>
            <div className="flex flex-row justify-between items-center">
              <ExitButton />
              <ThemeButton />
            </div>
          </div>
        </Sidebar>
      </div>
     
    </div>
  );
};

export default MySidebar;
