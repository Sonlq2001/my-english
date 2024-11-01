import { FC, forwardRef } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

import { YOUTUBE_EMBEDDED_LINK } from "@app/constants/app.constants";

interface ReactPlayerVideoProps extends ReactPlayerProps {
  videoId: string;
  ref?: React.Ref<ReactPlayer>;
}

const ReactPlayerVideo: FC<ReactPlayerVideoProps> = forwardRef(
  ({ videoId, ...props }, ref) => {
    return (
      <ReactPlayer
        url={YOUTUBE_EMBEDDED_LINK.replace(":youtube_id", videoId)}
        {...props}
        ref={ref}
      />
    );
  }
);

export default ReactPlayerVideo;
