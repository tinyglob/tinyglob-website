import "./App.css";
import MoldovaPng from "./assets/moldova.png";
import VideoComponent from "./components/VideoComponent";
import { useState } from "react";

function App() {
  const [videoOpen, setVideoOpen] = useState(false);

  const toggleVideo = () => {
    setVideoOpen(!videoOpen);
  };

  return (
    <>
      <div className={`container ${videoOpen ? "video-open" : ""}`}>
        <img src={MoldovaPng} alt="Moldova" width={700} height={700} />
        <div className="pointer-dot" onClick={toggleVideo}>
          12
        </div>
        {videoOpen && <VideoComponent />}
      </div>
    </>
  );
}

export default App;
