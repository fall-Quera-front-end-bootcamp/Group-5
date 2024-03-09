import { IoBookmarksOutline } from "react-icons/io5"
import { MdOutlineAddBox } from "react-icons/md"

const TaskTitle = () => {
  return (
    <div className="w-[657px] h-[262px] flex gap-[20px] flex-col px-[20px]">
      <div className="w-[34px] h-[34px] rounded-[50%] p-[4px] border-[#C1C1C1] border-2 border-dotted ">
        <IoBookmarksOutline className="h-[20px] w-[20px] -rotate-45 text-[#C1C1C1]" />
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className="font-heading text-heading-s">عنوان تسک</p>
        <div className="border-2 rounded-xl border-[#C1C1C1] p-[12px] ">
          <p className="font-body text-body-m">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
            برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد،
          </p>
        </div>
        <div className="w-[128px] h-[24px] flex  text-[#208D8E] items-center">
          <div className="h-[24px] w-m">
          <MdOutlineAddBox className="h-[22px] w-[22px]"/>
          </div>
          <p className="font-body text-body-xs ">
            اضافه کردن پیوست
          </p>
        </div>
      </div>
    </div>
  )
}

export default TaskTitle
