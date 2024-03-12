import Form from "../../components/common/Form/index";
import { LoginResponse } from "../../entities/Auth";

const ForgotPassword = () => {
  const onSubmit = (data: LoginResponse) => {
    console.log(data);
  };
  return <Form formClass={"forgotPassword"} onSubmit={onSubmit} />;
};

export default ForgotPassword;
