import { gql, useQuery } from "@apollo/client";
import FlightDetails from "./FlightDetails";
import MyButton from "components/MyButton";
import MyLoader from "components/MyLoader";
import MyError from "components/MyLoader";
import "./FlightDetails.css";
import { Launch } from "../Types";

const FLIGHT_DETAILS_QUERY = gql`
  query GetLaunchDetails($id: ID!) {
    launch(id: $id) {
      id
      launch_date_local
      launch_site {
        site_name_long
      }
      mission_name
      rocket {
        rocket_name
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
          }
        }
      }
      launch_success
      links {
        flickr_images
        video_link
      }
    }
  }
`;

type Props = {
  id: string;
  onBackClick: () => void;
};

export default function FlightDetailsPage({ onBackClick, id }: Props) {
  const { loading, error, data } = useQuery<{ launch: Launch }>(
    FLIGHT_DETAILS_QUERY,
    {
      variables: {
        id,
      },
    }
  );

  return (
    <div className="flightDetailsRoot">
      <h2>Flight details</h2>
      <div className="goBackButtonContainer">
        <MyButton label="Back" onClick={onBackClick} />
      </div>
      {loading ? (
        <MyLoader />
      ) : error ? (
        <MyError />
      ) : (
        <FlightDetails launch={data.launch} />
      )}
    </div>
  );
}
