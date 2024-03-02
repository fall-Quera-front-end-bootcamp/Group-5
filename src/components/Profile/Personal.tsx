import { InputField, MYButton } from "..";
import FieldType from "../../entities/Field";
import Props from "../../entities/Profile";
import useProfile from "../../hooks/useProfile";

const Personal: React.FC<Props> = ({ tab }) => {
  const { fields, button, label, register, handleSubmit, errors } =
    useProfile(tab);

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission here
  };

  return (
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
      {fields?.map(({ key, type, label }: FieldType) => (
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
  );
};

export default Personal;
