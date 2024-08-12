import { FC } from "react";

import IconSun from "@app/assets/images/icon-svg/icon-sun.svg?react";
import IconMoon from "@app/assets/images/icon-svg/icon-moon.svg?react";

import { WrapButtonTheme } from "./ButtonTheme.style";

const ButtonTheme: FC = () => {
  return (
    <WrapButtonTheme>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="checkbox-label">
        <IconMoon className="fa-moon" />
        <IconSun className="fa-sun" />
        <span className="ball"></span>
      </label>
    </WrapButtonTheme>
  );
};

export default ButtonTheme;
