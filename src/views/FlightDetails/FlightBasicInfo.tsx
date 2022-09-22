interface FlightBasicInfoProps {}

const FlightBasicInfo: React.FunctionComponent<FlightBasicInfoProps> = () => {
  return (
    <div>
      <div>
        <strong>Mission:</strong> mission
      </div>
      <div>
        <strong>Date:</strong> date
      </div>
      <div>
        <strong>Site:</strong> siteName
      </div>
      <div>
        <strong>Rocket:</strong> shipName
      </div>
      <div>
        <strong>Launch success:</strong> shipName
      </div>
    </div>
  );
};

export default FlightBasicInfo;
