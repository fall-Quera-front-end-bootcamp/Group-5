const Button = (porps) => {
  return (
    <>
      <div className=" flex items-center justify-center">
        <button
          type="submit"
          className="
       bg-blue-primary
       text-white-primary
       w-5/6
       rounded-md
       place-content-around
       font-bold
       text-bold-xs
       "
        >
          {porps.name}
        </button>
      </div>
    </>
  );
};

export default Button;
//inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white
