import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Searchbar from "./Searchbar";
import ProjectColorBox from "./ProjectColorBox";
import ProfilePreview from "./ProfilePreview";
import ExitButton from "./ExitButton";
import ThemeButton from "./ThemeButton";
interface MySideBarProps {
  className: string;
}
const MySidebar = ({className}:MySideBarProps) => {
  return (
    <div className={className}>
    <Sidebar
      rtl={true}
      className="mt-[40px] font-body h-[800px] mr-[40px]"
      width="340px"
      backgroundColor="white"
    >
      <div>
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
            <MenuItem>
              <Searchbar className="font-body text-[12px] text-right pr-1 h-[40px] w-[274px] bg-[#F6F7F9]" placeholder="جستجو کنید"/>
            </MenuItem>
            <MenuItem>
              <button
                className="bg-[#D3D3D3] font-body text-body-s w-[274px] h-[32px]  
          rounded-[6px] p-[10px] flex items-center gap-[4px] text-[#1E1E1E]"
              >
                <AddBoxOutlinedIcon /> ساختن اسپیس جدید
              </button>
            </MenuItem>
            <SubMenu
              className="font-body text-body-m"
              label="درس مدیریت پروژه"
              icon={<ProjectColorBox color="bg-green-primary" />}
            ></SubMenu>
            <SubMenu
              defaultOpen={true}
              className="font-body text-body-m"
              label="کارهای شخصی"
              icon={<ProjectColorBox color="bg-yellow-primary" />}
            >
              <MenuItem>پروژه اول</MenuItem>
              <MenuItem>پروژه دوم</MenuItem>
            </SubMenu>
            <SubMenu
              className="font-body text-body-m"
              label="درس طراحی کامپایلر"
              icon={<ProjectColorBox color="bg-blue-primary" />}
            ></SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </Sidebar>
    <div>
      <Sidebar
      rtl={true}
      className="\font-body  mr-[40px]"
      width="340px"
      backgroundColor="white"
      >
      <div className="flex flex-col  place-self-start w-[276px] h-[85px] mb-[40px]">
        <div className="place-self-start" >
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
