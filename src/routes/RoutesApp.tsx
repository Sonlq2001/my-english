import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import { LIST_ROUTES } from "./routes.config";
import { RouteItemDef } from "../types/routes.types";
import { store } from "@app/redux/store";
import { AuthPathsEnum } from "@app/features/auth/auth";

const wrapRoute: FC<RouteItemDef> = ({
  id,
  path,
  component,
  layout,
  isPrivateRoute,
}) => {
  const isLogged = Boolean(store.getState().auth.accessToken);

  const ComponentScreen = component;
  const ContentLayout = layout ?? DefaultLayout;

  const Content: FC = () => {
    if (!isLogged && isPrivateRoute) {
      window.location.href = AuthPathsEnum.LOGIN;
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

  return <Route key={id} path={path} element={<Content />} />;
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
