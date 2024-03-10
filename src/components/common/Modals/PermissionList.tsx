export  const PermissionList: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-7">
        <div>
          <h3 className="pb-2 font-bold ">دسترسی کامل</h3>
          <p className="text-[#7D828C]">
            توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه
          </p>
        </div>
        <div>
          <h3 className="pb-2 font-bold ">دسترسی ویرایش</h3>
          <p className="text-[#7D828C]">
            توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند
            پروژه را حذف یا تسک جدید بسازد.
          </p>
        </div>
        <div>
          <h3 className="pb-2 font-bold ">دسترسی کامنت</h3>
          <p className="text-[#7D828C]">
            توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما
            توانایی ویرایش تنظیمات پروژه را ندارد.
          </p>
        </div>
        <div>
          <h3 className="pb-2 font-bold ">فقط دسترسی مشاهده</h3>
          <p className="text-[#7D828C]">توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.</p>
        </div>
      </div>
    </>
  );
};
