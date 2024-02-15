import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "./Input";

interface FormsType {
  [key: string]: {
    title: string;
    button: string;
    schema: Record<string, any>;
    fields: { key: string; type: string; label: string }[];
  };
}

const forms: FormsType = {
  signIn: {
    title: "به کوئرا تسک منیجر خوش برگشتی :) ",
    button: "ورود",
    schema: {
      username: z.string().nonempty("نام کاربری الزامی است"),
      password: z.string().nonempty("رمز عبور الزامی است"),
    },
    fields: [
      { key: "username", type: "text", label: "نام کاربری" },
      { key: "password", type: "password", label: "رمز عبور" },
    ],
  },

  signUp: {
    title: "ثبت‌نام در کوئرا تسک منیجر",
    button: "ثبت نام",
    schema: {
      username: z.string().nonempty("نام کاربری الزامی است"),
      email: z.string().nonempty("نام کاربری الزامی است"),
      password: z.string().nonempty("رمز عبور الزامی است"),
    },
    fields: [
      { key: "username", type: "text", label: "نام کاربری" },
      { key: "email", type: "email", label: "ایمیل" },
      { key: "password", type: "password", label: "رمز عبور" },
    ],
  },
  forgotPassword: {
    title: "فراموشی رمز عبور",
    button: "دریافت ایمیل بازیابی رمز عبور",
    schema: {
      email: z.string().nonempty("نام کاربری الزامی است"),
    },
    fields: [{ key: "email", type: "email", label: "ایمیل خود را وارد کنید" }],
  },
  resetPassword: {
    title: "تغییر رمز عبور",
    button: "اعمال تغییرات",
    schema: {
      password: z.string().nonempty("رمز عبور الزامی است"),
      confirmPassword: z.string().nonempty("رمز عبور الزامی است"),
    },
    fields: [
      {
        key: "password",
        type: "password",
        label: "رمز عبور جدید را وارد کنید",
      },
      { key: "confirmPassword", type: "password", label: "تکرار رمز عبور" },
    ],
  },
};

interface FormProps {
  formClass: keyof FormsType;
}

const Form: React.FC<FormProps> = ({ formClass }) => {
  const { schema, fields, button } = forms[formClass];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(z.object(schema)),
  });

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission here
  };

  return (
    <div className="flex justify-center items-center h-screen" dir="rtl">
      <div className="max-w-[640px] mx-auto p-[24px] bg-white shadow-md rounded-lg">
        <h2 className="text-heading-l font-heading font-bold mb-[32px] text-center">
          {forms[formClass].title}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[592px]">
          {fields.map(({ key, type, label }) => (
            <InputField
              key={key}
              label={label}
              type={type}
              register={register(key)}
              error={errors[key]}
            />
          ))}
          <button
            type="submit"
            className="bg-brand-primary hover:bg-teal-primary text-white-primary font-body-800 h-xl w-full rounded-[6px]"
          >
            {button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
