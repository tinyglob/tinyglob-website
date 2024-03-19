import { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player/file";

export const VideoItem = ({}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsPlaying(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to check initial visibility

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={videoRef} style={{ marginBottom: "20px" }}>
      {/* <div style={{ marginBottom: "20px" }}> */}
      <ReactPlayer
        url={"/costco.mp4"}
        width={400}
        height={700}
        playing={isPlaying}
        loop
        className="video"
      />
    </div>
  );
};
