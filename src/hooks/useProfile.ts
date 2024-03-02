import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FieldType from "../entities/Field";

interface FormsType {
  [key: string]: {
    title: string;
    label: string;
    button: string;
    schema?: Record<string, any>;
    fields?: FieldType[];
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
  settings: {
    title: "تنظیمات",
    label: "ثبت تغییرات",
    button: "settings",
  },
};

const useProfile = (tab: string) => {
  const { title, schema, fields, button, label } = forms[tab];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:
      button === "account"
        ? schema &&
          zodResolver(
            z
              .object(schema)
              .refine((data) => data.password === data.confirmPassword, {
                path: ["confirmPassword"],
                message: "پسورد و تکرار آن باید یکسان باشد.",
              })
          )
        : schema && zodResolver(z.object(schema)),
  });

  return { title, fields, button, label, register, handleSubmit, errors };
};

export default useProfile;
