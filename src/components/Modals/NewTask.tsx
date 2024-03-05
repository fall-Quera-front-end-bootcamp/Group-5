import useLockBodyScroll from "../../hooks/useLockBodyScroll"
import { IoClose } from "react-icons/io5";

type NewTaskPropType = {
  setShowModal: (showModal: boolean) => void
}

const NewTask = ({setShowModal}:NewTaskPropType) => {
  useLockBodyScroll();
  return (
    <>
      <div
        className="flex justify-center items-center fixed inset-0 z-20"
      >
        <div className="max-w-3xl">
          <div className="relative flex flex-col gap-10 w-full bg-white p-8 rounded-3xl shadow-lg">
            <div className="flex justify-between items-start p-5">
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 bg-[#d9d9d9]"></div>
                  <input
                    className="outline-none"
                    placeholder="عنوان تسک"
                    type="text"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  <IoClose style={{color: "#BDBDBD"}}/>
                </button>
              </div>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi corporis itaque cumque ex, rem explicabo dolorum accusamus quos iusto quis, voluptate aut mollitia quae ullam obcaecati ipsa asperiores voluptatum quam!
                Ex odio iure a molestiae blanditiis doloremque magni. Rerum laborum dignissimos nulla temporibus labore, fugit asperiores velit maxime impedit officia debitis ipsum unde commodi nemo aliquam cumque consequatur ipsa aspernatur.
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6">
              <button
                className="bg-brand-primary hover:bg-teal-primary text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                ساخت تسک
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-10 bg-black"></div>
    </>
  )
} 

export default NewTask
