import { FC, ReactNode } from "react";

import AppHeader from "@app/components/AppHeader/AppHeader";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div id="default-layout">
      <AppHeader />
      {children}
    </div>
  );
};

export default DefaultLayout;
