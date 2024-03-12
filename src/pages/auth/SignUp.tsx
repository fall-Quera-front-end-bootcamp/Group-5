import { Form } from "../../components";
import { ValueType } from "../../entities/Auth";

const signUp = () => {
  const onSubmit = (data: ValueType) => {
    console.log(data);
  };
  return <Form formClass={"signUp"} onSubmit={onSubmit} />;
};

export default signUp;

import Form from "../../components/common/Form/index";
import { LoginResponse } from "../../entities/Auth";
import { useRegisterUser } from "../../hooks/useAuth";

const signUp = () => {
  const register = useRegisterUser();
  const onSubmit = (data: LoginResponse) => {
    register.mutate(data);
  };
  return (
    <Form
      formClass={"signUp"}
      onSubmit={onSubmit}
      mutateError={register.error}
    />
  );
};

export default signUp;
