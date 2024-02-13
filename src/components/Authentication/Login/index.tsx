function Login() {
  return(
    <div className="w-[640px] py-m space-y-l flex justify-center items-center flex-wrap bg-white rounded-[20px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] shadow-[0_50px_100px_-20px_(50, 50, 93, 0.25)]">
      <p className="font-heading text-heading-l text-center">به کوئرا تسک منیجر خوش برگشتی :) </p>
      <div className="w-[592px] space-y-l font-body">
        <div className="space-y-m">
          <div className="space-y-xs">
            <p className="text-body-s">نام کاربری</p>
            <input className="w-full h-[40px] rounded-md border" type="text" />
          </div>
          <div className="space-y-xs">
            <p className="text-body-s">رمز عبور</p>
            <input className="w-full h-[40px] rounded-md border" type="text" />
            <a className="text-body-xs" href="#">رمز عبور خود را فراموش کرده‌اید؟</a>
          </div>
        </div>
        <div className="space-y-m">
          <input className="w-full bg-brand-primary font-bold" type="button" value="ورود" />
        </div>
      </div>
    </div>
  )
}

export default Login