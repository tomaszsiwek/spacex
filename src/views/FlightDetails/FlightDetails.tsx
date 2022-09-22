import MyCard from "components/MyCard";
import FlightBasicInfo from "./FlightBasicInfo";
import FlightGallery from "./FlightGallery";
import FlightPayload from "./FlightPayload";
import FlightVideo from "./FlightVideo";

export default function FlightDetails() {
  return (
    <div className="flightDetailsRoot">
      <MyCard>
        <FlightBasicInfo />
      </MyCard>
      <MyCard>
        <FlightPayload />
      </MyCard>
      <MyCard>
        <FlightGallery />
      </MyCard>
      <MyCard>
        <FlightVideo />
      </MyCard>
    </div>
  );
}
