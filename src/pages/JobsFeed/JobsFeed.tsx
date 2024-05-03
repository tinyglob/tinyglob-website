import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./JobsFeed.css";
import { motion } from "framer-motion";
import useFetchJobsById from "../../hooks/useFetchJobsById";
import { useEffect, useRef, useState } from "react";

export const JobsFeed = () => {
  const { pathname } = useLocation();
  const jobId = pathname.split("/")[2].toLocaleLowerCase();
  const { jobPosting, isLoading } = useFetchJobsById(jobId);

  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const videos = containerRef.current.querySelectorAll(".job-post");
        videos.forEach((video) => {
          const rect = video.getBoundingClientRect();
          const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
          setIsPlaying(isInView);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="container" ref={containerRef}>
        <h1>TIKTOK</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {jobPosting && (
              <div>
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    style={{ scrollSnapAlign: "start", paddingBottom: "30px" }}
                  >
                    <motion.div
                      key={jobPosting.title}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="job-post" key={jobPosting.title}>
                        <div className="video-wrapper">
                          <video
                            autoPlay={isPlaying && index === 0}
                            loop
                            muted
                            controls
                            height={640}
                            width={370}
                            style={{ borderRadius: "1rem" }}
                          >
                            <source src="/costco.mp4" type="video/mp4" />
                          </video>
                          <div className="video-info">
                            <p style={{ fontWeight: 700 }}>
                              {jobPosting.title} in {jobPosting.company}
                            </p>
                            <p>{jobPosting.city}</p>
                            <p>
                              {jobPosting.start_salary} -{" "}
                              {jobPosting.end_salary} {jobPosting.currency}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
