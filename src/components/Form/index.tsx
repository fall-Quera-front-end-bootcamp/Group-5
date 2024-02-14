import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "./Input";

interface Schema {
  [key: string]: any;
}

interface Props {
  schema: Schema;
}

// const schema = {
//     username: z.string().nonempty("نام کاربری الزامی است"),
//     password: z.string().nonempty("رمز عبور الزامی است"),
//   };

const Form: React.FC<Props> = ({ schema }) => {
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
          به کوئرا تسک منیجر خوش برگشتی :)
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[592px]">
          {Object.keys(schema).map((key) => (
            <InputField
              key={key}
              label={key}
              type="text"
              register={register(key)}
              error={errors[key]}
            />
          ))}

          <button
            type="submit"
            className="bg-brand-primary hover:bg-teal-primary text-white-primary font-body-800 h-xl w-full rounded-[6px]"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
