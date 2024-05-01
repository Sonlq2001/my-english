import { FC, useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

import { loginSuccess } from "@app/features/auth/auth";
import { DashboardPathsEnum } from "@app/features/dashboard/dashboard";
import { useAppDispatch } from "@app/redux/store";

const LoginSuccessScreen: FC = () => {
  const dispatch = useAppDispatch();
  const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(true);

  const redirectTo = (url: string) => (window.location.href = url);

  useEffect(() => {
    const queryUrl = new URLSearchParams(window.location.search);
    const code = queryUrl.get("code");
    const otp = queryUrl.get("otp");
    if (code && otp) {
      dispatch(loginSuccess({ code, otp }))
        .then(unwrapResult)
        .then(() => {
          redirectTo(DashboardPathsEnum.DASHBOARD);
        })
        .catch(() => {
          // TODO: redirect
          redirectTo("/error");
        })
        .finally(() => setIsLoadingLogin(false));
    } else {
      // TODO: redirect
      redirectTo("/error");
    }
  }, [dispatch]);

  if (isLoadingLogin) {
    // TODO: Loading
    return <div>Loading...</div>;
  }

  return null;
};

export default LoginSuccessScreen;
