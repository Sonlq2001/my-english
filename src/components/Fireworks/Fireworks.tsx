import { FC, HTMLAttributes } from "react";

import { WrapFireworks } from "./Fireworks.styles";

interface FireworksProps extends HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium" | "larger";
  time?: number; // seconds
}

const Fireworks: FC<FireworksProps> = ({
  size = "medium",
  time = 2,
  ...props
}) => {
  return (
    <WrapFireworks size={size} {...props} time={time}>
      <div className="firework" id="firework1">
        <div className="explosion"></div>
        <div className="explosion"></div>
        <div className="explosion"></div>
        <div className="explosion"></div>
        <div className="explosion"></div>
        <div className="explosion"></div>
        <div className="explosion"></div>
        <div className="explosion"></div>
        <div className="explosion"></div>
        <div className="explosion"></div>
        <div className="explosion"></div>
        <div className="explosion"></div>
      </div>
    </WrapFireworks>
  );
};

export default Fireworks;
