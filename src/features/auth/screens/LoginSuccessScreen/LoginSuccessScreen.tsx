import { FC, useEffect } from "react";

const LoginSuccessScreen: FC = () => {
  // TODO: handle success
  console.log("omg");
  useEffect(() => {
    fetch("http://localhost:5000/v1/api/auth/login-success");
  }, []);
  return <div>LoginSuccessScreen</div>;
};

export default LoginSuccessScreen;
