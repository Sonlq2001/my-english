import { memo, useEffect, useRef, useState, ImgHTMLAttributes } from "react";

import { WrapLazyImage } from "@app/components/LazyImage/LazyImage.styles";
import PlaceholderImage from "@app/assets/images/placeholder-image.jpg";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, className, ...props }) => {
  const [inView, setInView] = useState<boolean>(false);
  const placeholderRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!window.IntersectionObserver || !placeholderRef.current) {
      return;
    }

    const observe = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        }
      },
      {
        threshold: 0,
        root: null,
        rootMargin: "0%",
      }
    );
    observe.observe(placeholderRef.current);

    return () => {
      observe.disconnect();
    };
  }, []);

  return inView ? (
    <img src={src} className={className} {...props} />
  ) : (
    <WrapLazyImage>
      <div className="lazyContent" ref={placeholderRef} />
      <img ref={placeholderRef} src={PlaceholderImage} {...props} />
    </WrapLazyImage>
  );
};

export default memo(LazyImage);
