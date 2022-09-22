interface FlightVideoProps {}

const FlightVideo: React.FunctionComponent<FlightVideoProps> = () => {
  return (
    <>
      <iframe
        title="aaa"
        width="420"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
    </>
  );
};

export default FlightVideo;
