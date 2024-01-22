import { FC } from "react";
import { Link } from "react-router-dom";

import { NavbarWrap } from "./Navbar.styles";

const Navbar: FC = () => {
  return (
    <NavbarWrap>
      <Link to="/">Home</Link>
      <Link to="/listening">Listening</Link>
    </NavbarWrap>
  );
};

export default Navbar;
