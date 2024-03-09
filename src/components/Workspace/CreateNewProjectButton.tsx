import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const CreateNewProjectButton = () => {
  return (
    <div>
      <button className="w-[200px] h-[76px] rounded-[16px] border-red-500 border-[4px] py-[24px] px-[10px] gap-[4px] font-body text-body-m text-red-600 ">
        <AddBoxOutlinedIcon /> ساختن پروژه جدید
      </button>
    </div>
  );
};

export default CreateNewProjectButton;
