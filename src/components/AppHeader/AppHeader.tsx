import { FC } from "react";
import { Link } from "react-router-dom";

const AppHeader: FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/listening">Listening</Link>
    </div>
  );
};

export default AppHeader;
