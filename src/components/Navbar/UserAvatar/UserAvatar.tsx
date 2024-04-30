import { FC } from "react";

import { WrapUserAvatar } from "./UserAvatar.styles";

interface UserAvatarProps {
  photo: string;
  fullName: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ photo, fullName }) => {
  return (
    <WrapUserAvatar>
      <span className="full-name">{fullName}</span>
      <img className="user-avatar" src={photo} alt="user-avatar" />
    </WrapUserAvatar>
  );
};

export default UserAvatar;
