import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FieldType from "../entities/Field";
import useAuthStore from "../store";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

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
      image: z.optional(
        z
          .any()
          .refine(
            (file) => file?.size <= MAX_FILE_SIZE,
            `Max image size is 5MB.`
          )
          .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
          )
      ),
      first_name: z
        .string()
        .min(3, { message: "نام باید حداقل 3 کاراکتر باشد." }),
      last_name: z
        .string()
        .min(3, { message: "نام باید حداقل 3 کاراکتر باشد." }),

      phone_number: z
        .string()
        .min(10, { message: "شماره تلفن باید حداقل 10 کاراکتر باشد." })
        .max(12, { message: "شماره تلفن باید حداکثر 10 کاراکتر باشد." }),
    },
    fields: [
      { key: "first_name", type: "text", label: "نام" },
      { key: "last_name", type: "text", label: "نام خانوادگی" },
      { key: "phone_number", type: "text", label: "شماره موبایل" },
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

      old_password: z
        .string()
        .min(6, { message: "پسورد باید حداقل 6 کاراکتر باشد." }),
      new_password: z
        .string()
        .min(6, { message: "پسورد باید حداقل 6 کاراکتر باشد." }),
      new_password1: z
        .string()
        .min(6, { message: "پسورد باید حداقل 6 کاراکتر باشد." }),
    },
    fields: [
      { key: "email", type: "email", label: "ایمیل" },
      { key: "username", type: "text", label: "نام کاربری" },

      {
        key: "old_password",
        type: "password",
        label: "رمز عبور فعلی",
      },
      {
        key: "new_password",
        type: "password",
        label: "رمز عبور جدید",
      },
      {
        key: "new_password1",
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
  const user = useAuthStore((s) => s.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:
      button === "account" && user
        ? {
            email: user.email,
            username: user.username,
          }
        : {
            first_name: user.first_name,
            last_name: user.last_name,
            phone_number: user.phone_number,
          },
    resolver:
      button === "account"
        ? zodResolver(
            z
              .object(schema!)
              .refine((data) => data.password === data.confirmPassword, {
                path: ["confirmPassword"],
                message: "پسورد و تکرار آن باید یکسان باشد.",
              })
          )
        : zodResolver(z.object(schema!)),
  });

  return { title, fields, button, label, register, handleSubmit, errors };
};

export default useProfile;
