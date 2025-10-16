import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react"

const VideoSection = () => {

const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-50 md:h-100 lg:h-150 overflow-hidden py-6">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="src\assets\videos\ngo1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <button
        onClick={togglePlayPause}
        className="absolute bottom-6 right-6 z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md transition"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-white" />
        ) : (
          <Play className="w-6 h-6 text-white" />
        )}
      </button>

      </div>
    </section>
  );
};

export default VideoSection;
