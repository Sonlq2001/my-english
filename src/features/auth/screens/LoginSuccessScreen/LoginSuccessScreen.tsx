import { FC, useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

import { loginSuccess } from "@app/features/auth/auth";
import { DashboardPathsEnum } from "@app/features/dashboard/dashboard";
import { useAppDispatch } from "@app/redux/store";

const LoginSuccessScreen: FC = () => {
  const dispatch = useAppDispatch();
  const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(true);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      dispatch(loginSuccess({ code }))
        .then(unwrapResult)
        .then((res) => {
          if (res.user.googleId !== code) {
            // todo return login fail
            return;
          }
          window.location.href = DashboardPathsEnum.DASHBOARD;
        })
        .finally(() => setIsLoadingLogin(false));
    }
  }, [dispatch]);

  if (isLoadingLogin) {
    // TODO: Loading
    return <div>Loading...</div>;
  }

  return null;
};

export default LoginSuccessScreen;
