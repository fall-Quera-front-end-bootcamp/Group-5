import Form from "../../components/common/Form/index";
import { LoginResponse } from "../../entities/Auth";
import { useLoginUser } from "../../hooks/useAuth";

const Login = () => {
  const login = useLoginUser();
  const onSubmit = (data: LoginResponse) => {
    login.mutate(data);
  };
  return <Form formClass={"signIn"} onSubmit={onSubmit} />;
};

export default Login;
