import { Launch } from "../Types";
import React from "react";
import MyButton from "components/MyButton";
import { CheckIcon } from "components/MyIcons";

interface MobileTableProps {
  launch: Launch;
  onFlightSelect: (value: string) => void;
}

const MobileTable: React.FunctionComponent<MobileTableProps> = ({
  launch,
  onFlightSelect,
}) => {
  return (
    <tr>
      <td>
        <div>
          <strong>Mission:</strong> {launch.mission_name}
        </div>
        <div>
          <strong>Date:</strong> {launch.launch_date_local}
        </div>
        <div>
          {/* <strong>Site:</strong> {launch.launch_site.site_name_long} */}
        </div>
        <div>
          <strong>Rocket:</strong> {launch.rocket.rocket_name}
        </div>
      </td>
      <td>{launch.launch_success && <CheckIcon />}</td>
      <td>
        <MyButton onClick={() => onFlightSelect(launch.id)} label="Details" />
      </td>
    </tr>
  );
};

export default MobileTable;
