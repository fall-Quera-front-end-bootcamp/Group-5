type TaskPeople = {
  images: string[];
};

const TaskPeoples: React.FC<TaskPeople> = ({ images }) => {
  return (
    <div className=" ">
      {images.map((e: string, index) => {
        return (
          <div className={`float-right relative z-${100 - index} ml-[-15px]`}>
            <a
              className="block w-[32px] h-[32px] border-2 relative 
                   mx-0 my-auto rounded-full border-black"
            >
              <div className="w-full h-full overflow-hidden block rounded-full">
                <img src={e} className="w-full overflow-clip " />
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default TaskPeoples;