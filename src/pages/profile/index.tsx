import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsPersonGear, BsPersonCheck } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import { InputField, MYButton } from "../../components";

interface SlideProps {
  tab: string;
  setTab: (tab: string) => void;
}

interface FormsType {
  [key: string]: {
    title: string;
    label: string;
    button: string;
    schema: Record<string, any>;
    fields: { key: string; type: string; label: string }[];
  };
}

const forms: FormsType = {
  personalInfo: {
    title: "اطلاعات فردی",
    label: "ثبت تغییرات",
    button: "personal",
    schema: {
      firstname: z
        .string()
        .min(3, { message: "نام باید حداقل 3 کاراکتر باشد." }),
      lastname: z
        .string()
        .min(3, { message: "نام باید حداقل 3 کاراکتر باشد." }),

      phoneNumber: z
        .number()
        .min(10, { message: "شماره تلفن باید حداقل 10 کاراکتر باشد." })
        .max(12, { message: "شماره تلفن باید حداکثر 10 کاراکتر باشد." }),
    },
    fields: [
      { key: "firstname", type: "text", label: "نام" },
      { key: "lastname", type: "text", label: "نام خانوادگی" },
      { key: "phoneNumber", type: "text", label: "شماره موبایل" },
    ],
  },
  accountInfo: {
    title: "اطلاعات حساب",
    label: "ثبت تغییرات",
    button: "account",
    schema: {
      email: z
        .string()
        .min(1, { message: "ایمیل الزامی است" })
        .email("ایمیل وارد شده معتبر نیست"),
      username: z
        .string()
        .min(6, { message: "نام کاربری باید حداقل 6 کاراکتر باشد." }),

      currentPassword: z
        .string()
        .min(6, { message: "پسورد باید حداقل 6 کاراکتر باشد." }),
      password: z
        .string()
        .min(6, { message: "پسورد باید حداقل 6 کاراکتر باشد." }),
      confirmPassword: z
        .string()
        .min(6, { message: "پسورد باید حداقل 6 کاراکتر باشد." }),
    },
    fields: [
      { key: "email", type: "email", label: "ایمیل" },
      { key: "username", type: "text", label: "نام کاربری" },

      {
        key: "currentPassword",
        type: "password",
        label: "رمز عبور فعلی",
      },
      {
        key: "password",
        type: "password",
        label: "رمز عبور جدید",
      },
      {
        key: "confirmPassword",
        type: "password",
        label: "تکرار رمز عبور جدید",
      },
    ],
  },
};

const Profile = () => {
  const [tab, setTab] = useState<string>("personalInfo");
  const { title, schema, fields, button, label } = forms[tab];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:
      button === "account"
        ? zodResolver(
            z
              .object(schema)
              .refine((data) => data.password === data.confirmPassword, {
                path: ["confirmPassword"],
                message: "پسورد و تکرار آن باید یکسان باشد.",
              })
          )
        : zodResolver(z.object(schema)),
  });

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission here
  };

  return (
    <div className="h-screen flex">
      {/* slide */}
      <Slide tab={tab} setTab={setTab} />
      {/* main */}
      <div className="mt-[80px] mx-[60px] w-[354px]">
        <h3 className="font-body text-[31px] mb-[40px]">{title}</h3>
        {tab === "personalInfo" && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex">
              <div className="rounded-full bg-yellow-secondary text-yellow-primary w-[100px] h-[100px] flex items-center justify-center font-bold text-[20px] ml-5">
                NM
              </div>
              <div>
                <button className="border-solid border-2 border-brand-primary rounded-lg p-[10px] mb-5 mt-1 bg-white font-body text-[18px] text-brand-primary">
                  ویرایش تصویر پروفایل
                </button>
                <p className="font-body text-[#8A8989] text-[12px]">
                  این تصویر برای عموم قابل نمایش است.
                </p>
              </div>
            </div>
            {fields.map(({ key, type, label }) => (
              <InputField
                key={key}
                label={label}
                type={type}
                register={register(key)}
                error={errors[key]}
              />
            ))}
            <MYButton myKey={button} label={label} />
          </form>
        )}
        {tab === "accountInfo" && (
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(({ key, type, label }) => (
              <InputField
                key={key}
                label={label}
                type={type}
                register={register(key)}
                error={errors[key]}
              />
            ))}
            <MYButton myKey={button} label={label} />
          </form>
        )}
        {tab === "settings" && (
          <>
            <h3 className="font-body text-[31px]">تنظیمات</h3>
            <div>theme settings</div>
          </>
        )}
      </div>
    </div>
  );
};

const Slide: React.FC<SlideProps> = ({ tab, setTab }) => (
  <div className="flex justify-start flex-col  border-l-2 w-[340px] py-6  px-10">
    <h2 className=" mb-[60px] font-heading text-heading-l bg-gradient-to-r from-[#118C80] to-[#4AB7D8] text-transparent bg-clip-text">
      کوئرا تسک منیجر
    </h2>
    <button className="flex justify-between h-[36px] w-[90px] bg-brand-primary text-white py-[4px] px-[8px] mb-[40px] rounded-lg items-center">
      <FaArrowRightLong /> <span className="font-body ">بازگشت</span>
    </button>
    <div>
      <div
        className={`cursor-pointer w-[266px] py-[8px] px-[10px] mb-[20px] rounded flex items-center gap-2 text-[18px] ${
          tab === "personalInfo" ? "bg-brand-secondary font-bold " : "font-body"
        }`}
        onClick={() => setTab("personalInfo")}
      >
        <BsPersonGear size="22px" />
        <span>اطلاعات فردی</span>
      </div>
      <div
        className={`cursor-pointer w-[266px] py-[8px] px-[10px] mb-[20px] rounded flex items-center gap-2 text-[18px] ${
          tab === "accountInfo" ? "bg-brand-secondary font-bold " : "font-body"
        }`}
        onClick={() => setTab("accountInfo")}
      >
        <BsPersonCheck size="22px" />
        <span>اطلاعات حساب</span>
      </div>
      <div
        className={`cursor-pointer w-[266px] py-[8px] px-[10px] mb-[20px] rounded flex items-center gap-2 text-[18px] ${
          tab === "settings" ? "bg-brand-secondary font-bold " : "font-body"
        }`}
        onClick={() => setTab("settings")}
      >
        <SlSettings size="22px" />
        <span>تنظیمات</span>
      </div>
    </div>
  </div>
);

export default Profile;
