import React from "react";
type TaskPeople = {
  images: string[];
};

export const TaskPeoples: React.FC<TaskPeople> = ({ images }) => {
  return (
    // <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
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

// (<div
//   className="float-right relative z-100 ml-[-20px]">
//   {/* account-photo  account-product-owner */}
//   <a className="block w-[32px] h-[32px] border-2 relative
//    mx-auto my-0 rounded-full border-black">
//     {/* mask */}
//     <div className="w-full h-full overflow-hidden block rounded-full">
//       <img
//         src={e}
//         //img
//         className="w-full overflow-clip "
//       />
//     </div>
//   </a>
// </div>)
// :
// <div
//             className={`float-right relative z-${100 - index} ml-[-20px]`}>
//             <a className="block w-[32px] h-[32px] border-2 relative
//            mx-0 my-auto rounded-full border-black">
//               <div className="w-full h-full overflow-hidden block rounded-full">
//                 <img
//                   src={e}
//                   className="w-full overflow-clip "
//                 />
//               </div>
//             </a>
//           </div>
