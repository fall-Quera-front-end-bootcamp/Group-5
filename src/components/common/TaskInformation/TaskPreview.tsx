import { TaskPeoples, TaskPriority } from "..";
import { IoShareSocialOutline } from "react-icons/io5";

const TaskDetail = () => {
  return (
    <div className=" basis-2/12 flex">
      <div className="flex w-[657px] gap-[2px] justify-between items-center px-s">
        <div className="flex justify-between w-[238px] h-[34px] items-center">
          <div className="w-[111px] h-[30px] bg-red-primary text-center rounded-md">
            <p className="font-body text-[12px text-center text-white">
              {" "}
              open{" "}
            </p>
          </div>
          <div className="w-[61px] flex justify-between">
            <TaskPeoples
              images={[
                "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=",
                "https://media.istockphoto.com/id/1389361465/photo/profile-portrait-of-smiling-black-man-in-studio.webp?b=1&s=170667a&w=0&k=20&c=cs9LjN17nKN9R5eo25iOzpJuqDN-5rVWqw-cG4t6tuY=",
              ]}
            />
          </div>
          <div>
            <TaskPriority priority="high" />
          </div>
        </div>
        <div className="   h-[32px] flex ">
          <IoShareSocialOutline className="w-[24px] h-[24px]" />
          <p className="font-body text-bold-m">اشتراک گذاری</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TaskDetail;
