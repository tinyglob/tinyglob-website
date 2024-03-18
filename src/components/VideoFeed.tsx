import { useRef, useEffect } from "react";
import { VideoItem } from "./VideoItem";

export const VideoFeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const videoHeight = window.innerHeight;

      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();

        const delta = Math.sign(event.deltaY);
        const nextScrollTop = container.scrollTop + delta * videoHeight;

        container.scrollTo({
          top: nextScrollTop,
          behavior: "smooth",

        });
      };

      window.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflow: "hidden",
        scrollSnapType: "y mandatory",
      }}
    >
      {[...Array(10)].map((_, index) => (
        <div key={index} style={{ scrollSnapAlign: "start" }}>
          <VideoItem />
        </div>
      ))}
    </div>
  );
};
