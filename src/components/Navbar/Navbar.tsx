import { FC } from "react";
import { Link } from "react-router-dom";

import IconWeather from "@app/assets/images/icon-svg/icon-weather.svg?react";
import { useGetUserInfo } from "@app/hooks/use-get-use-info";

import { NavbarWrap, BoxWeather } from "./Navbar.styles";
import UserAvatar from "./UserAvatar/UserAvatar";

const Navbar: FC = () => {
  const { isLogged, photo, fullName } = useGetUserInfo();

  return (
    <NavbarWrap>
      <BoxWeather>
        <span className="text">Today:</span>
        <div className="temperature">
          20<sup>o</sup>c
        </div>
        <IconWeather />
      </BoxWeather>

      {isLogged && photo && fullName ? (
        <UserAvatar photo={photo} fullName={fullName} />
      ) : (
        <Link className="btn-login" to="/login">
          Login
        </Link>
      )}
    </NavbarWrap>
  );
};

export default Navbar;
