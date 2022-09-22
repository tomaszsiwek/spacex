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
          <th>Picture</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {launches?.map(
          ({ id, mission_name, launch_date_local, launch_site, ships }) => (
            <LaunchRow
              onFlightSelect={onDetailSelect}
              key={id}
              id={id}
              mission={mission_name}
              date={launch_date_local}
              siteName={launch_site.site_name_long}
            />
          )
        )}
      </tbody>
    </table>
  );
}
