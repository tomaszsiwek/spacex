import { gql, useQuery } from "@apollo/client";
import FlightDetails from "./FlightDetails";
import MyButton from "components/MyButton";
import "./FlightDetails.css";

const FLIGHT_LIST_QUERY = gql`
  query GetLaunchDetails {
    launchesPast(limit: 10, sort: "launch_date_local", order: "asc") {
      id
      launch_date_local
      launch_site {
        site_name_long
      }
      mission_name
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;

type Props = {
  onBackClick: () => void;
};

export default function FlightDetailsPage({ onBackClick }: Props) {
  // const { loading, data } = useQuery(FLIGHT_LIST_QUERY);

  // if (loading) {
  //   return <>Loading...</>;
  // }

  return (
    <>
      <h2>Flight details</h2>
      <div className="goBackButtonContainer">
        <MyButton label="GO BACK" onClick={onBackClick} />
      </div>
      <FlightDetails />
    </>
  );
}
