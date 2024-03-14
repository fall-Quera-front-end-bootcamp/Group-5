import { MenuItem } from "react-pro-sidebar";
import { useProjects } from '../../../../hooks/useProject';

export const RenderMenuItems: React.FC = () => {
  const { data: ProjectNamesArray } = useProjects();
  return (
    <>
      {ProjectNamesArray?.map((ProjectName) => (
        <MenuItem>{ProjectName.name}</MenuItem>
      ))}

      <button
        className=" font-body text-body-s
         w-[260px] h-[32px]  
          rounded-[6px] p-[10px] 
          flex items-center
           gap-[4px] text-[#1E1E1E]
           mr-10
           border-green-200"
      // onClick={() => setShowModal(true)}
      >
        ساختن پروژ چدید
        {/* <AddBoxOutlinedIcon /> */}

      </button>
    </>
  );
};
