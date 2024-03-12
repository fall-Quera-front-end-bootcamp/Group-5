import Form from "../../components/common/Form/index";
import { LoginResponse } from "../../entities/Auth";

const ResetPassword = () => {
  const onSubmit = (data: LoginResponse) => {
    console.log(data);
  };
  return <Form formClass={"resetPassword"} onSubmit={onSubmit} />;
};

export default ResetPassword;
