import { Launch } from "./FlightListTypes";
import LaunchRow from "./FlightListRow";
import "./FlightList.css";

type Props = {
  launches: Launch[];
  onDetailSelect: (value: string) => void;
};

export default function FlightList({ launches, onDetailSelect }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Flight information</th>
          <th>Launch success</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {launches?.map((launch) => (
          <LaunchRow
            onFlightSelect={onDetailSelect}
            key={launch.id}
            launch={launch}
          />
        ))}
      </tbody>
    </table>
  );
}
