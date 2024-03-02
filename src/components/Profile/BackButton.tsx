import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex justify-between h-[36px] w-[90px] bg-brand-primary text-white py-[4px] px-[8px] mb-[40px] rounded-lg items-center"
    >
      <FaArrowRightLong /> <span className="font-body ">بازگشت</span>
    </button>
  );
};

export default BackButton;
