
interface WorkspaceColorBoxProps {
    color: string;
    projectName: string;
}

const WorkspaceColorBox = ({color , projectName} : WorkspaceColorBoxProps) => {
  return (
    <div className={`h-[80px] w-[200px] rounded-[16px] bg-${color}-primary flex justify-center items-center`}>
      <p className="text-body-m font-body text-white">{projectName}</p>
    </div>
  );
};

export default WorkspaceColorBox;
