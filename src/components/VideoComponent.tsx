const VideoComponent = () => {
  return (
    <video autoPlay loop width={400} height={700} className="video">
      <source src="costco.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
