import Form from "../../components/common/Form/index";
import { LoginResponse } from "../../entities/Auth";

const Login = () => {
  const onSubmit = (data: LoginResponse) => {
    console.log(data);
  };
  return <Form formClass={"signIn"} onSubmit={onSubmit} />;
};

export default Login;
