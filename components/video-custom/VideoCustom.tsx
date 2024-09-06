import React, { useRef, useState } from 'react'
import cn from 'clsx'

type VideoCustomProps = {
  src: string;
  className?: string;
}

const VideoCustom: React.FC<VideoCustomProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stop, setStop] = useState(false);

  const handleVideo = () => {
    setStop(!stop);
    if (stop !== true) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className={cn("relative w-full aspect-[16/9] rounded-sm overflow-hidden", props.className)}>
      <div className="relative flex w-full overflow-hidden h-full group outline-none aspect-[16/9]">
        <video ref={videoRef} autoPlay loop muted playsInline className="aspect-[16/9] min-w-full min-h-full absolute left-0 top-0 w-full h-full object-cover">
          <source src={props.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-1 md:p-2 gap-1 text-white text-xs z-10 transition-opacity duration-200">
          <div className="flex flex-row-reverse items-center justify-start w-full gap-1">
            <button type="button" className="flex items-center justify-center text-gray-500 hover:text-gray-300 focus-visible:outline-none rounded-md w-6 h-6"
              onClick={handleVideo}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" fill="none">
                <rect width="3" height="11" y=".5" rx="1.5" fill="currentColor"></rect>
                <rect width="3" height="11" x="7" y=".5" rx="1.5" fill="currentColor"></rect>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCustom