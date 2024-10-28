import { FC, forwardRef } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

import { YOUTUBE_EMBEDDED_LINK } from "@app/constants/app.constants";
import { ProgressVideo } from "@app/features/listening/types/listening.type";

interface ReactPlayerVideoProps extends ReactPlayerProps {
  videoId: string;
  onDuration?: (duration: number) => void;
  onProgress?: (e: ProgressVideo) => void;
  onEnded?: () => void;
  ref?: React.Ref<ReactPlayer>;
}

const ReactPlayerVideo: FC<ReactPlayerVideoProps> = forwardRef(
  (
    { videoId, playing, volume, onDuration, onEnded, onProgress, ...props },
    ref
  ) => {
    return (
      <ReactPlayer
        url={YOUTUBE_EMBEDDED_LINK.replace(":youtube_id", videoId)}
        onDuration={onDuration}
        onProgress={onProgress}
        onEnded={onEnded}
        playing={playing}
        volume={volume}
        {...props}
        ref={ref}
      />
    );
  }
);

export default ReactPlayerVideo;
