import { useNavigate } from "react-router-dom";
import Form from "../../components/common/Form/index";
import { LoginResponse } from "../../entities/Auth";
import { useLoginUser } from "../../hooks/useAuth";

const Login = () => {
  const login = useLoginUser();
  const navigate = useNavigate();
  const onSubmit = (data: LoginResponse) => {
    login.mutate(data);
    navigate("/");
  };
  return (
    <Form formClass={"signIn"} onSubmit={onSubmit} mutateError={login.error} />
  );
};

export default Login;
