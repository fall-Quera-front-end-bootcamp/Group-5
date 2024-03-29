import { useEffect, useState } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Searchbar from "../Searchbar";
import ProjectColorBox from "../ProjectColorBox";
import RenderMenuItems from "./RenderMenuItems";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { NewWorkspaceModal } from "../../../common";
import { useWorkspaces } from "../../../../hooks/useWorkspace";
import { useGetBgColor } from "../../../../services/ColorsService";
import { useDataStore } from "../../../../store";

export const RenderSubMenus: React.FC = () => {
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(0);
  const [checkIfClicked, setcheckIfClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { data: workspaces } = useWorkspaces();
  const setWorkspaceId = useDataStore((s) => s.setWorkspaceId);
  const { workspaceId } = useDataStore((s) => s.params);

  useEffect(() => {
    if (workspaces && workspaces.length > 0) {
      setWorkspaceId(workspaces[0].id!);
      setSelectedWorkspaceId(workspaces[0].id!);
    }
  }, [workspaces]);

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
      {workspaceId && workspaces?.map((workspace,index) => (
        <SubMenu
          key={index}
          onClick={() => {
              setWorkspaceId(workspace.id!);
              setSelectedWorkspaceId(workspace.id!);
              setcheckIfClicked(selectedWorkspaceId === workspace.id!);
          }}
          open={selectedWorkspaceId === workspace.id! && !checkIfClicked}
          className="font-body text-body-m"
          label={workspace.name}
          icon={<ProjectColorBox color={useGetBgColor(workspace.color!)} />}
        >
          <RenderMenuItems />
        </SubMenu>
      ))}

      {showModal && <NewWorkspaceModal setShowModal={setShowModal} />}
    </>
  );
};
