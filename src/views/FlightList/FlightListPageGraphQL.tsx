import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import FlightList from "./FlightList";
import FlightListFilters from "./FlightListFilters";
import MyPagination from "components/MyPagination";
import MyLoader from "components/MyLoader";
import MyError from "components/MyLoader";
import { Launch } from "./FlightListTypes";

const FLIGHT_LIST_QUERY = gql`
  query GetPastLaunchesTotalCount(
    $mission_name: String
    $offset: Int
    $limit: Int
  ) {
    launchesPastResult(
      offset: $offset
      limit: $limit
      sort: "launch_date_local"
      order: "asc"
      find: { mission_name: $mission_name }
    ) {
      result {
        totalCount
      }
      data {
        id
        launch_date_local
        launch_site {
          site_name_long
        }
        mission_name
        rocket {
          rocket_name
        }
      }
    }
  }
`;
const ITEMS_PER_PAGE = 7;

type Props = {
  onDetailSelect: (value: string) => void;
};

export default function FlightListPageGraphQL({ onDetailSelect }: Props) {
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { loading, data, error } = useQuery<{
    launchesPastResult: { result: { totalCount: number }; data: Launch[] };
  }>(FLIGHT_LIST_QUERY, {
    variables: {
      mission_name: filter,
      offset: (page - 1) * ITEMS_PER_PAGE + 1,
      limit: ITEMS_PER_PAGE,
    },
  });

  const totalCount = data?.launchesPastResult.result.totalCount || 0;
  const launches = data?.launchesPastResult.data;

  const onApplyFilters = (value: string) => {
    setPage(1);
    setFilter(value);
  };

  return (
    <div className="flightListRoot">
      <h2>Launch list</h2>
      <FlightListFilters value={filter} onApplyFilters={onApplyFilters} />
      {loading ? (
        <MyLoader />
      ) : error ? (
        <MyError />
      ) : (
        <>
          <FlightList onDetailSelect={onDetailSelect} launches={launches} />
          {totalCount > ITEMS_PER_PAGE && (
            <MyPagination
              totalPages={Math.ceil(totalCount / ITEMS_PER_PAGE) || 0}
              value={page}
              onPageChange={(value) => setPage(value)}
            />
          )}
        </>
      )}
    </div>
  );
}
