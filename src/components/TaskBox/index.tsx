type taskType = {
  id: number,
  img: string,
  title: string,
  caption: string
}

const TaskBox:React.FC<taskType> = ({id, img, title, caption}) => {
  return (
    <div className="w-[250px] break-words bg-white rounded-3xl p-4 flex flex-col gap-4 font-body font-normal" style={{boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.4), 0px 7px 6px -3px rgba(0, 0, 0, 0.3), 0px -3px 0px 0px rgba(0, 0, 0, 0.2) inset'}}>
      {img && <img className="rounded-[4px]" src={img} alt="task's image" />}
      <div className="flex flex-col gap-2 text-body-xs">
        <p className="text-[rgba(83, 77, 96, 1)]">{title}</p>
        <p>{caption}</p>
      </div>
      <div className="flex gap-2">
        {/* tags */}
      </div>
    </div>
  );
}

export default TaskBox;
