import { FC } from "react";

const LoginScreen: FC = () => {
  const handleLoginGoogle = () => {
    window.open("http://localhost:5000/v1/api/auth/google", "_self");
  };

  return (
    <div>
      <button onClick={handleLoginGoogle}>Login google</button>
    </div>
  );
};

export default LoginScreen;
