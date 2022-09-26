interface FlightVideoProps {
  src: string;
}

const FlightVideo: React.FunctionComponent<FlightVideoProps> = ({ src }) => {
  if (!src) {
    return null;
  }

  return (
    <iframe
      title="Launch video"
      width="100%"
      height="400"
      src={src
        .replace("youtu.be/", "youtube.com/watch?v=")
        .replace("watch?v=", "embed/")}
    ></iframe>
  );
};

export default FlightVideo;
