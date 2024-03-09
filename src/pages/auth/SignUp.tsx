import Form from "../../components/common/Form/index";
import { LoginResponse } from "../../entities/Auth";
import { useRegisterUser } from "../../hooks/useAuth";

const signUp = () => {
  const register = useRegisterUser();
  const onSubmit = (data: LoginResponse) => {
    console.log(data);
    register.mutate(data);
  };
  return <Form formClass={"signUp"} onSubmit={onSubmit} />;
};

export default signUp;
