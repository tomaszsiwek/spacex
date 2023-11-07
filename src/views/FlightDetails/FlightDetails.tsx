import FlightBasicInfo from "./FlightBasicInfo";
import FlightGallery from "./FlightGallery";
import FlightPayload from "./FlightPayload";
import FlightVideo from "./FlightVideo";
import { Launch } from "../Types";

type Props = {
  launch: Launch;
};

export default function FlightDetails({ launch }: Props) {
  return (
    <div className="mainGrid">
      <div className="basicInfoItem">
        <FlightBasicInfo launch={launch} />
      </div>
      <div className="payloadItem">
        {/* <FlightPayload payloads={launch.rocket.second_stage.payloads} /> */}
      </div>
      <div className="galleryItem">
        <FlightGallery images={launch.links?.flickr_images} />
      </div>
      <div className="videoItem">
        <FlightVideo src={launch.links?.video_link} />
      </div>
    </div>
  );
}
