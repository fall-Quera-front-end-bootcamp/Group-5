import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import "semantic-ui-css/semantic.min.css";
import { IoClose } from "react-icons/io5";
type TermsAndConditionsType = {
  setShowModal: (showModal: boolean) => void;
};

export const TermsAndConditions: React.FC<TermsAndConditionsType> = ({
  setShowModal,
}) => {
  useLockBodyScroll();
  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-30">
        <div
          className="w-[60vw] p-5
                 bg-white text-[#1E1E1E] 
                 font-body rounded-xl 
                 flex flex-col gap-10
                 
                 "
        >
          <div className="flex justify-between items-center">
            <p className="grow text-center font-heading text-heading-s">
              قوانین و مقررات
            </p>
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
          </div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
          <ul className="list-outside list-disc pr-5">
            <li>
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،
            </li>
            <li>
              و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
              بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
              گذشته حال و آینده،
            </li>
            <li>
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
              بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
              پیشرو در زبان فارسی ایجاد کرد،
            </li>
            <li>
              در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
              راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
              حروفچینی دستاوردهای اصلی، و
            </li>
            <li>
              جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
              قرار گیرد
            </li>
          </ul>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-10 bg-black"></div>
    </>
  );
};
