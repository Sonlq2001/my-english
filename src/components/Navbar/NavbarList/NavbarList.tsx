import { FC } from "react";
import debounce from "lodash.debounce";

import Portal from "@app/components/Portal/Portal";
import ClickOutside from "@app/components/ClickOutside/ClickOutside";
import { useGetUserInfo } from "@app/hooks/use-get-use-info";
import { ID_IGNORE } from "@app/constants/app.constants";
import { useAppDispatch } from "@app/redux/store";
import { AuthPathsEnum, logout } from "@app/features/auth/auth";

import {
  WrapNavbarList,
  NavbarListAvatar,
  WrapList,
} from "./NavbarList.styles";

interface NavbarListProps {
  open: true;
  setOpenNavbarList: (open: false) => void;
}

const NavbarList: FC<NavbarListProps> = ({ open, setOpenNavbarList }) => {
  const dispatch = useAppDispatch();
  const { fullName, photo } = useGetUserInfo();

  const handleLogout = debounce(() => {
    dispatch(logout()).finally(() => {
      window.location.href = AuthPathsEnum.LOGIN;
    });
  }, 300);

  return (
    <Portal open={open}>
      <ClickOutside
        onOutsideClick={() => setOpenNavbarList(false)}
        idElementIgnore={ID_IGNORE}
      >
        <WrapNavbarList>
          <NavbarListAvatar>
            <img src={photo} alt="" className="nav-avatar" />
            <div>
              <div className="full-name">{fullName}</div>
              <span className="slug-name">@le-quang-son</span>
            </div>
          </NavbarListAvatar>

          {/* TODO: nav list */}
          <WrapList>
            <a className="link-nav" href="">
              Listen to podcasts
            </a>
            <a className="link-nav" href="">
              Add vocabulary
            </a>
          </WrapList>

          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </WrapNavbarList>
      </ClickOutside>
    </Portal>
  );
};

export default NavbarList;
