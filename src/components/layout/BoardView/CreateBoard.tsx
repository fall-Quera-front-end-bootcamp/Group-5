const CreateBoard = () => {
  return (
    <div>
      <div
        className="w-[250px] h-[40px] py-2 px-3 bg-white rounded-3xl border-t-2 font-body flex justify-between"
        style={{
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex gap-1 items-center">
          <p className="text-body-m">افزودن بورد</p>
        </div>
      </div>
    </div>
  );
};

export default CreateBoard;
