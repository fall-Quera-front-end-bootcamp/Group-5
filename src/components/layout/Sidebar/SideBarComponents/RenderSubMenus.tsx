import Searchbar from "../Searchbar";
import ProjectColorBox from "../ProjectColorBox";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { NewWorkspaceModal } from "../../../common";
import { useState } from "react";
import { useWorkspaces } from "../../../../hooks/useWorkspace";
import { useGetBgColor } from "../../../../services/ColorsService";

export const RenderSubMenus: React.FC = () => {
  const { data } = useWorkspaces();
  console.log(data);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <MenuItem>
        <Searchbar
          className="font-body text-[12px] text-right pr-1 h-[40px] w-[274px] bg-[#F6F7F9]"
          placeholder="جستجو کنید"
        />
      </MenuItem>
      <MenuItem>
        <button
          className="bg-[#D3D3D3] font-body text-body-s w-[274px] h-[32px]  
          rounded-[6px] p-[10px] flex items-center gap-[4px] text-[#1E1E1E]"
          onClick={() => setShowModal(true)}
        >
          <AddBoxOutlinedIcon /> ساختن اسپیس جدید
        </button>
      </MenuItem>
      {data?.map((e) => {
        return (
          <SubMenu
            className="font-body text-body-m"
            label={e.name}
            icon={<ProjectColorBox color={useGetBgColor(e.color!)} />}
          ></SubMenu>
        );
      })}

      {showModal && <NewWorkspaceModal setShowModal={setShowModal} />}
    </>
  );
};

{
  /* <SubMenu
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
      ></SubMenu> */
}
