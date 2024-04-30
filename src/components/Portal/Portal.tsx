import { FC, ReactNode, memo, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  open: boolean;
}

const Portal: FC<PortalProps> = ({ children, open }) => {
  const refPortal = useRef(document.createElement("div"));

  useEffect(() => {
    const elementPortal = refPortal.current;
    if (open) {
      elementPortal.setAttribute("id", "portal-app");
      document.body.appendChild(elementPortal);
    }

    return () => {
      elementPortal.remove();
    };
  }, [open]);

  return open ? createPortal(children, refPortal.current) : null;
};

export default memo(Portal);
