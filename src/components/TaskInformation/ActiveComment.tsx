import { HiOutlineChatBubbleOvalLeftEllipsis  as Chat} from "react-icons/hi2";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { GoFile } from "react-icons/go";
import { VscSmiley } from "react-icons/vsc";

const ActiveComment = () => {
  return (
    <div className=" w-full h-[209px] flex flex-col relative border-top border-[#F4F4F4] border-[1px]">
      <textarea className="w-full h-[209px] font-body text-body-s z-0 pt-[10px] pr-s resize-none " placeholder="کامنت شما" />
      <div className=" h-[24px] w-[24px] absolute top-[13px] left-[36px] text-center">
        <Chat className="w-[18px] h-[16.5px] text-[#AEAEAE]"/>
      </div>
      <div className="flex justify-between items-center px-[20px] h-[60px] ">
        <div className="flex justify-around">
            <div className="w-[24px] h-[24px] text-[#C9CBDA]">
                <MdAlternateEmail className="w-[18px] h-[18px]"/>
            </div>
            <div className="w-[24px] h-[24px] text-[#C9CBDA]">
                <IoMdAttach className="w-[18px] h-[18px]"/>
            </div>
            <div className="w-[24px] h-[24px] text-[#C9CBDA]">
                <GoFile className="w-[18px] h-[18px]"/>
            </div>
            <div className="w-[24px] h-[24px] text-[#C9CBDA]">
                <VscSmiley className="w-[18px] h-[18px]"/>
            </div>
        </div>
        <button className="w-[82px] h-[29px] bg-[#208D8E] text-white font-body text-body-xs rounded-lg">
            ثبت کامنت
        </button>
      </div>
    </div>
  )
}

export default ActiveComment
