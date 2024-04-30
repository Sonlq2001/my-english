import { FC, ReactNode, useEffect, useRef, memo } from "react";

interface ClickOutsideProps {
  children: ReactNode;
  onOutsideClick: () => void;
  idElementIgnore?: string;
}

const ClickOutside: FC<ClickOutsideProps> = ({
  children,
  onOutsideClick,
  idElementIgnore,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        idElementIgnore !== event.target.id
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
  }, [idElementIgnore, onOutsideClick]);

  return <div ref={containerRef}>{children}</div>;
};

export default memo(ClickOutside);
