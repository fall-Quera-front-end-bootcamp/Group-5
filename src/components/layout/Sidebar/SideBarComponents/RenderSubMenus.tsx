import Searchbar from "../Searchbar";
import ProjectColorBox from "../ProjectColorBox";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { NewWorkspaceModal } from "../../../common";
import { useState } from "react";
import { useWorkspaces } from "../../../../hooks/useWorkspace";
import { useGetBgColor } from "../../../../services/ColorsService";
import { RenderMenuItems } from "./RenderMenuItems";
import useAuthStore from "../../../../store";

export const RenderSubMenus: React.FC = () => {
  const [workspaceIndex, setWorkspaceIndex] = useState(0);
  const [checkIfClicked, setcheckIfClicked] = useState(false)
  const { data } = useWorkspaces();
  const [showModal, setShowModal] = useState(false);
  const setWorkspaceId = useAuthStore((s) => s.setWorkspaceId);
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
      {data?.map((workspace, index) => {
        return (
          <SubMenu
            onClick={() => {
              setWorkspaceId(workspace.id!),
                setWorkspaceIndex(workspace.id!)
              setcheckIfClicked(workspaceIndex === workspace.id!)
            }}
            open={workspaceIndex === workspace.id! && !checkIfClicked}
            className="font-body text-body-m"
            label={workspace.name}
            icon={<ProjectColorBox color={useGetBgColor(workspace.color!)} />}
          >
            <RenderMenuItems />
          </SubMenu>
        );
      })}

      {showModal && <NewWorkspaceModal setShowModal={setShowModal} />}
    </>
  );
};
