import Props from "../../../entities/Profile";
import useProfile from "../../../hooks/useProfile";
import { InputField, MYButton } from "../../common/exports";

const Account: React.FC<Props> = ({ tab }) => {
  const { fields, button, label, register, handleSubmit, errors } =
    useProfile(tab);

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields?.map(({ key, type, label }) => (
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

export default Account;
