import { TaskPeoples } from "../../index";

const TaskComments = () => {
  return (
    <div className="w-full flex items-center">
      <div className="w-[36px] h-[36px]">
        <TaskPeoples
          images={[
            "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
          ]}
        />
      </div>
      <div className="flex flex-col border-[1px] border-gray-secondary rounded-lg w-full mx-5 justify-center p-4">
        <div className="flex flex-row justify-between px-3 ">
          <div className="flex items-center gap-3">
            <p className="font-bold text-[16px] text-[#208D8E]">شما</p>
            <p className="font-body text-body-xs text-[#AAAAAA]">
              کامنت گذاشتید
            </p>
          </div>

          <div>
            <p className="font-body text-body-xs text-[#AAAAAA]">12 تیر</p>
          </div>
        </div>
        <div>
          <p className="font-body text-body-xs text-[#AAAAAA]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskComments;
