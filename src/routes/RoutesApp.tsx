import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { store } from "@app/redux/store";
import { AuthPathsEnum } from "@app/features/auth/auth";
import { ROOT_PATH } from "@app/constants/app.constants";
import AppNotFound from "@app/components/AppNotFound/AppNotFound";

import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import { LIST_ROUTES } from "./routes.config";
import { RouteItemDef } from "../types/routes.types";

const wrapRoute: FC<RouteItemDef> = ({
  id,
  path,
  component,
  layout,
  isPrivateRoute,
  isAuthRoute,
  subMenu,
  // index = false,
}) => {
  const isLogged = Boolean(store.getState().auth.accessToken);

  const ComponentScreen = component ?? AppNotFound;
  const ContentLayout = layout ?? DefaultLayout;

  const Content: FC = () => {
    if (!isLogged && isPrivateRoute) {
      window.location.href = AuthPathsEnum.LOGIN;
      return null;
    }

    if (isLogged && isAuthRoute) {
      window.location.href = ROOT_PATH;
      return null;
    }

    return (
      <ContentLayout>
        <Suspense fallback={null}>
          <ComponentScreen />
        </Suspense>
      </ContentLayout>
    );
  };

  return (
    <Route key={id} path={path} element={<Content />}>
      {subMenu &&
        subMenu.map((item) => {
          const ComponentSub = item.component ?? AppNotFound;
          return (
            <Route
              index
              key={item.id}
              path={item.path}
              element={<ComponentSub />}
            />
          );
        })}
    </Route>
  );
};

const RoutesApp: FC = () => {
  return (
    <Routes>
      {LIST_ROUTES.map((route) => wrapRoute(route))}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default RoutesApp;
