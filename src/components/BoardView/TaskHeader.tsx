import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import NewTask from "../Modals/NewTask";

type taskHeaderType = {
  title: string,
  numOfTasks: number
}

const TaskHeader = ({title, numOfTasks}:taskHeaderType) => {
  const [showPlusModal, setShowPlusModal] = useState(false)

  const randomColor = ():string => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    if(red === green && green === blue) {
      return randomColor();
    }
    
    return `rgb(${red}, ${green}, ${blue})`;
  }

  const convertToPersianNumber = (num:number):string => {
    const persianDigits: { [key:string]:string } = {"0": '۰', "1": '۱', "2": '۲', "3": '۳', "4": '۴', "5": '۵', "6": '۶', "7": '۷', "8": '۸', "9": '۹'};
    return num.toString().replace(/\d/g, (d:string) => persianDigits[d]);
  }
  
  return (
    <div className="w-[250px] h-[40px] py-2 px-3 bg-white rounded-3xl border-t-2 font-body flex justify-between" style={{borderColor: randomColor(), boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.2)'}}>
      <div className="flex gap-1 items-center">
        <p className="text-body-m">{title}</p>
        <p className="text-body-xs pt-[2px] px-1 bg-gray-100 rounded-[100px]">{convertToPersianNumber(numOfTasks)}</p>
      </div>
      <div className="flex gap-1 items-center">
        <HiEllipsisHorizontal />
        <button onClick={() => setShowPlusModal(true)}>
          <FaPlus />
        </button>

        {showPlusModal &&(
          <NewTask setShowModal={setShowPlusModal}/>
        )}
      </div>
    </div>
  );
}

export default TaskHeader;