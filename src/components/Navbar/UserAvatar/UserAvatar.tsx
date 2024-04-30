import { FC, useState } from "react";

import { WrapUserAvatar } from "./UserAvatar.styles";
import NavbarList from "../NavbarList/NavbarList";
import { ID_IGNORE } from "@app/constants/app.constants";

interface UserAvatarProps {
  photo: string;
  fullName: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ photo, fullName }) => {
  const [openNavbarList, setOpenNavbarList] = useState<boolean>(false);

  return (
    <WrapUserAvatar>
      <span className="full-name">{fullName}</span>

      <img
        className="user-avatar"
        src={photo}
        alt="user-avatar"
        id={ID_IGNORE}
        onClick={() => setOpenNavbarList(!openNavbarList)}
      />

      {openNavbarList && (
        <NavbarList open setOpenNavbarList={setOpenNavbarList} />
      )}
    </WrapUserAvatar>
  );
};

export default UserAvatar;
