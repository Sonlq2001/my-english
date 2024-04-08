import { FC, ReactNode, useEffect, useRef } from "react";

interface ClickOutsideProps {
  children: ReactNode;
  onOutsideClick: () => void;
}

const ClickOutside: FC<ClickOutsideProps> = ({ children, onOutsideClick }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onOutsideClick();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={containerRef}>{children}</div>;
};

export default ClickOutside;
