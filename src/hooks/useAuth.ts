import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import FormsType, { LoginResponse } from "../entities/Auth";
import APIClient from "../services/apiClient";

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
      username: z
        .string()
        .min(6, { message: "نام کاربری باید حداقل 6 کاراکتر باشد." }),
      email: z
        .string()
        .min(1, { message: "ایمیل الزامی است" })
        .email("ایمیل وارد شده معتبر نیست"),
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

const useAuth = (formClass: string) => {
  const { schema, fields, button, label, title } = forms[formClass];
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

  return { title, fields, button, label, register, handleSubmit, errors };
};

export const useRegisterUser = () => {
  const apiClient = new APIClient<LoginResponse>("accounts/");
  return useMutation<LoginResponse, Error, LoginResponse>({
    mutationFn: apiClient.post,

    onSuccess: (newUser: LoginResponse) => {
      console.log(newUser);
    },
  });
};

export default useAuth;
