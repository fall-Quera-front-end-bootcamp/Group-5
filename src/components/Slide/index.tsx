import React, { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children }) => (
  <div className="flex justify-start flex-col  border-l-2 w-[340px] py-6  px-10">
    <h2 className=" mb-[60px] font-heading text-heading-l bg-gradient-to-r from-[#118C80] to-[#4AB7D8] text-transparent bg-clip-text">
      کوئرا تسک منیجر
    </h2>
    {children}
  </div>
);

export default Slide;
