interface ProjectColorBoxProps {
    color: string;
}
const ProjectColorBox = (props: ProjectColorBoxProps) => {
  return (
    <div className={`h-[20px] w-[20px] ${props.color} ml-2`}>
    </div>
  )
}

export default ProjectColorBox
