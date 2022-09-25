import { Payload } from "../Types";

interface FlightPayloadProps {
  payloads: Payload[];
}

const FlightPayload: React.FunctionComponent<FlightPayloadProps> = ({
  payloads,
}) => {
  return (
    <>
      <div>Payload:</div>
      <ul>
        {payloads.map((payload, index) => (
          <li key={index}>
            {payload.payload_type}{" "}
            {payload.payload_mass_kg ? `(${payload.payload_mass_kg} kg)` : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FlightPayload;
