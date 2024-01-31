import { FC } from "react";

import IconWeather from "@app/assets/images/icon-svg/icon-weather.svg?react";

import { NavbarWrap } from "./Navbar.styles";

const Navbar: FC = () => {
  return (
    <NavbarWrap>
      <IconWeather />
    </NavbarWrap>
  );
};

export default Navbar;
