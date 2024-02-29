import React from "react";
type TaskPeople = {
  images: string[];
};

export const TaskPeoples: React.FC<TaskPeople> = ({ images }) => {
  return (
    <div className="block">
      {images.map((e: string, index) => {
        return (index === 0 ? (<div
          className="float-right relative z-100">
          {/* account-photo  account-product-owner */}
          <a className="w-[32px] h-[32px] border-2 relative block
           mx-0 my-auto rounded-full border-black">
            {/* mask */}
            <div className="w-full h-full overflow-hidden block rounded-full">
              <img
                src={e}
                //photo
                className="w-full overflow-clip "
              />
            </div>
          </a>
        </div>)
          :
          (<div
            className={`float-right relative z-${100 - index} ml-[-20px]`}>
            <a className="w-[32px] h-[32px] border-2 relative block
           mx-0 my-auto rounded-full border-black">
              <div className="w-full h-full overflow-hidden block rounded-full">
                <img
                  src={e}
                  className="w-full overflow-clip "
                />
              </div>
            </a>
          </div>)
          //author
        );
      })}
    </div>
  );
};
