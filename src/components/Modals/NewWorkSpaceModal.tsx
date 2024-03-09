import useLockBodyScroll from "../../hooks/useLockBodyScroll"
import { IoClose } from "react-icons/io5";

type NewProjectType = {
    setShowModal: (showModal: boolean) => void
}

export const NewWorkSpaceModal: React.FC<NewProjectType> = ({ setShowModal }) => {
    useLockBodyScroll()
    return (
        <>
            <div className="flex justify-center items-center fixed inset-0 z-30">
                <div className="w-[470px] p-5
                 bg-white text-[#1E1E1E] 
                 font-body rounded-xl 
                 flex flex-col gap-10
                 
                 ">
                    <div className="flex justify-between items-center pl-10">
                        <button
                            className="text-2xl
                             hover:text-red-primary 
                             hover:rotate-90 
                             transition-all
                             flex-none"
                            onClick={() => setShowModal(false)}
                        >
                            <IoClose />
                        </button>
                        <h2 className="text-center
                         font-heading 
                         text-heading-xs
                         grow"
                        >ساختن ورک اسپیس جدید
                        </h2>

                    </div>
                    <div className="flex flex-col gap-6 px-5">
                        <div className="flex flex-col gap-2">
                            <h3>نام ورک اسپیس</h3>
                            <div className="flex items-center
                                h-10 w-full rounded-lg overflow-hidden">
                                <input
                                    className="w-full h-full bg-[#F0F1F3] p-3"
                                    type="text"
                                />
                            </div>
                        </div>
                        <button className="w-full h-full
                             transition-all 
                             bg-brand-primary 
                             hover:bg-teal-primary 
                             text-white
                             rounded-lg
                            
                             ">ادامه
                        </button>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-10 bg-black"></div>
        </>
    )
}