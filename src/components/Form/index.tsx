import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "./Input";
import MYButton from "../Button";

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
  signIn: {
    title: "به کوئرا تسک منیجر خوش برگشتی :) ",
    label: "ورود",
    button: "signIn",
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
    label: "ثبت نام",
    button: "signUp",
    schema: {
      username: z.string().nonempty("نام کاربری الزامی است"),
      email: z.string().nonempty("نام کاربری الزامی است"),
      password: z.string().nonempty("رمز عبور الزامی است"),
      terms: z.literal(true, {
        errorMap: () => ({ message: "شما با قوانین موافقت نکردید!!" }),
      }),
    },
    fields: [
      { key: "username", type: "text", label: "نام کاربری" },
      { key: "email", type: "email", label: "ایمیل" },
      { key: "password", type: "password", label: "رمز عبور" },
      { key: "terms", type: "checkbox", label: "قوانین و مقررات را می‌پذیرم." },
    ],
  },
  forgotPassword: {
    title: "فراموشی رمز عبور",
    label: "دریافت ایمیل بازیابی رمز عبور",
    button: "forgotPassword",
    schema: {
      email: z.string().nonempty("نام کاربری الزامی است"),
    },
    fields: [{ key: "email", type: "email", label: "ایمیل خود را وارد کنید" }],
  },
  resetPassword: {
    title: "تغییر رمز عبور",
    label: "اعمال تغییرات",
    button: "resetPassword",
    schema: {
      password: z
        .string()
        .min(6, { message: "پسورد باید حداقل 6 کاراکتر باشد." }),
      confirmPassword: z
        .string()
        .min(6, { message: "پسورد باید حداقل 6 کاراکتر باشد." }),
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
  const { schema, fields, button, label } = forms[formClass];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:
      button === "resetPassword"
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
          <MYButton myKey={button} label={label} />
        </form>
      </div>
    </div>
  );
};

export default Form;
