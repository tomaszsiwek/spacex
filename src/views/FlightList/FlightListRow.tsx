import { Launch } from "./FlightListTypes";
import React from "react";
import MyButton from "components/MyButton";

interface MobileTableProps {
  id: string;
  mission: string;
  date: string;
  siteName: string;
  shipName?: string;
  onFlightSelect: (value: string) => void;
}

const MobileTable: React.FunctionComponent<MobileTableProps> = ({
  id,
  mission,
  date,
  siteName,
  shipName,
  onFlightSelect,
}) => {
  return (
    <tr>
      <td>
        <div>
          <strong>Mission:</strong> {mission}
        </div>
        <div>
          <strong>Date:</strong> {date}
        </div>
        <div>
          <strong>Site:</strong> {siteName}
        </div>
        <div>
          <strong>Ship name:</strong> {shipName}
        </div>
      </td>
      <td>picture</td>
      <td>
        <MyButton onClick={() => onFlightSelect(id)} label="Details" />
      </td>
    </tr>
  );
};

export default MobileTable;
