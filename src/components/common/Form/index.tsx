import React from "react";
import InputField from "./Input";
import MYButton from "../Button";
import useAuth from "../../../hooks/useAuth";

interface FormProps {
  formClass: string;
}

const Form: React.FC<FormProps> = ({ formClass }) => {
  const { title, fields, button, label, register, handleSubmit, errors } =
    useAuth(formClass);

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission here
  };

  return (
    <div className="flex justify-center items-center h-screen" dir="rtl">
      <div className="max-w-[640px] mx-auto p-[24px] bg-white shadow-md rounded-lg">
        <h2 className="text-heading-l font-heading font-bold mb-[32px] text-center">
          {title}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[592px]">
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
