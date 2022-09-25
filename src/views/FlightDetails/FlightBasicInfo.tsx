import { Launch } from "../Types";
import { CheckIcon, TimesIcon } from "components/MyIcons";

interface FlightBasicInfoProps {
  launch: Launch;
}

const FlightBasicInfo: React.FunctionComponent<FlightBasicInfoProps> = ({
  launch,
}) => {
  return (
    <div>
      <div>
        <strong>Mission:</strong> {launch.mission_name}
      </div>
      <div>
        <strong>Date:</strong> {launch.launch_date_local}
      </div>
      <div>
        <strong>Site:</strong> {launch.launch_site.site_name_long}
      </div>
      <div>
        <strong>Rocket:</strong> {launch.rocket.rocket_name}
      </div>
      <div>
        <strong>Success:</strong>
        {launch.launch_success ? <CheckIcon /> : <TimesIcon />}
      </div>
    </div>
  );
};

export default FlightBasicInfo;
