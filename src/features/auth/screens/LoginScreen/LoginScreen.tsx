import { FC } from "react";

import BackgroundLogin from "@app/assets/images/background-login.png";
import IconGoogle from "@app/assets/images/icon-svg/icon-google.svg?react";

import {
  WrapDeco,
  WrapLoginScreen,
  WrapLoginSocial,
} from "./LoginScreen.styles";

const LoginScreen: FC = () => {
  const handleLoginGoogle = () => {
    window.open("http://localhost:5000/v1/api/auth/google", "_self");
  };

  return (
    <WrapLoginScreen>
      <WrapLoginSocial>
        <div className="inner-content">
          <h1>Login</h1>
          <blockquote>
            Try, don't give up. 1 percent better every day. No pain no gain.
          </blockquote>

          <button className="btn-social" onClick={handleLoginGoogle}>
            <IconGoogle />
            <span>Login with Google</span>
          </button>
        </div>
      </WrapLoginSocial>

      <WrapDeco>
        <img src={BackgroundLogin} alt="bg-login" />
      </WrapDeco>
    </WrapLoginScreen>
  );
};

export default LoginScreen;
