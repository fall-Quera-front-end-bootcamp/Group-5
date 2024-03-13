import { Sidebar, Menu, SubMenu } from "react-pro-sidebar";
import { RenderSubMenus } from "./RenderSubMenus";

export const RenderWorkSpacesInSideBar: React.FC = () => {
  return (
    <>
      <Sidebar
        rtl={true}
        className="mt-[40px] font-body h-[800px] mr-[40px]"
        width="340px"
        backgroundColor="white"
      >
        <h1
          className="font-heading text-heading-l bg-gradient-to-r text-center
               from-[#118C80] to-[#4AB7D8] text-transparent bg-clip-text mt-[40px] mb-[37px]"
        >
          کوئرا تسک منیجر
        </h1>
        <Menu>
          <SubMenu
            defaultOpen={true}
            label="ورک اسپیس ها"
            className="font-bold text-[16px]"
          >
            <RenderSubMenus />
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};
