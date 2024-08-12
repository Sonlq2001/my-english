import { FC, HTMLAttributes } from "react";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

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
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === "string"
          ? isPropValid(propName)
          : true;
      }}
    >
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
    </StyleSheetManager>
  );
};

export default Fireworks;
