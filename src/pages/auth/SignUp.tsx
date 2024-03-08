import { Form } from "../../components";
import { ValueType } from "../../entities/Auth";

const signUp = () => {
  const onSubmit = (data: ValueType) => {
    console.log(data);
  };
  return <Form formClass={"signUp"} onSubmit={onSubmit} />;
};

export default signUp;
