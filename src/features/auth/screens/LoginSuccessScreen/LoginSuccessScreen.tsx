import { FC, useEffect } from "react";

import { usePostLoginSuccessMutation } from "../../redux/auth.api";
import { DashboardPathsEnum } from "@app/features/dashboard/dashboard";

const LoginSuccessScreen: FC = () => {
  const code = new URLSearchParams(window.location.search).get("code");

  const [postLoginSuccess, result] = usePostLoginSuccessMutation();

  useEffect(() => {
    if (code) {
      postLoginSuccess(code);
    }
  }, [code, postLoginSuccess]);

  useEffect(() => {
    if (result.data) {
      window.location.href = DashboardPathsEnum.DASHBOARD;
    }
  }, [result.data]);

  if (result.isLoading) {
    // TODO: Loading
    return <div>Loading...</div>;
  }

  return null;
};

export default LoginSuccessScreen;
