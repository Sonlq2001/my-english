import { FC } from "react";

import IconWeather from "@app/assets/images/icon-svg/icon-weather.svg?react";

import { NavbarWrap, BoxWeather } from "./Navbar.styles";

const Navbar: FC = () => {
  return (
    <NavbarWrap>
      <BoxWeather>
        <span className="text">Today:</span>
        <div className="temperature">
          20<sup>o</sup>c
        </div>
        <IconWeather />
      </BoxWeather>

      <div>Sown</div>
    </NavbarWrap>
  );
};

export default Navbar;
