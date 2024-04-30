import { useMemo } from "react";

import { useAppSelector } from "@app/redux/store";

export const useGetUserInfo = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const user = useAppSelector((state) => state.auth.user);

  const dataUserInfo = useMemo(() => {
    const isLogged = Boolean(accessToken && user);

    return {
      isLogged,
      ...user,
    };
  }, [accessToken, user]);

  return dataUserInfo;
};
