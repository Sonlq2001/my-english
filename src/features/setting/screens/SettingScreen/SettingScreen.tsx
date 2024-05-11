import { FC, useEffect } from "react";
import { redirect } from "react-router-dom";

const SettingScreen: FC = () => {
  useEffect(() => {
    console.log("render setting screen");
    redirect("/settings/podcast");
    // window.location.href = "/settings/podcast";
  }, []);

  return <div>Loading...</div>;
};

export default SettingScreen;
