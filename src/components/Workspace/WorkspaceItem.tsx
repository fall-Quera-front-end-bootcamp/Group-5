import WorkspaceColorBox from "./WorkspaceColorBox"
import CreateNewProjectButton from "./CreateNewProjectButton";

interface WorkspaceItemProps {
    workspaceName: string;
    workspaceColor: string;
    listOfProjects: string[]  ;
}

const WorkspaceItem = ({workspaceName, workspaceColor, listOfProjects} : WorkspaceItemProps) => {

  return (
    <div className="flex flex-col gap-[32px]">
    <div >
        <p className="font-bold text-bold-xl">{workspaceName}</p>
    </div>
    <div className="flex gap-[32px]">
        {listOfProjects.length>0 ? listOfProjects.map(project => {
            return (
                <WorkspaceColorBox color={workspaceColor} projectName={project} key={project} />
            )
        }) : <CreateNewProjectButton />}
    </div>

    <div className="w-[1036px] border-[2px] -rotate-0"></div>

</div>
  )
}

export default WorkspaceItem
