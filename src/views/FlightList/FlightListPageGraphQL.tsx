import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import FlightList from "./FlightList";
import FlightListFilters from "./FlightListFilters";
import MyPagination from "components/MyPagination";
import MyLoader from "components/MyLoader";
import MyError from "components/MyLoader";
import { Launch } from "../Types";

export const FLIGHT_LIST_QUERY = gql`
  query GetPastLaunchesTotalCount(
    $mission_name: String
    $offset: Int
    $limit: Int
  ) {
    launchesPast(
      offset: $offset
      limit: $limit
      sort: "launch_date_local"
      order: "asc"
      find: { mission_name: $mission_name }
    ) {
      id
      launch_date_local
      launch_site {
        site_name_long
      }
      mission_name
      launch_success
      rocket {
        rocket_name
      }
    }
    lastId: launchesPast(
      limit: 1
      sort: "launch_date_local"
      order: "desc"
      find: { mission_name: $mission_name }
    ) {
      id
    }
  }
`;
const ITEMS_PER_PAGE = 7;

type Props = {
  onDetailSelect: (value: string) => void;
};

export default function FlightListPageGraphQL({ onDetailSelect }: Props) {
  const localStoragePage = JSON.parse(window.localStorage.getItem("page"));
  const localStorageFilter = JSON.parse(window.localStorage.getItem("filter"));

  const [filter, setFilter] = useState<string>(localStorageFilter || "");
  const [page, setPage] = useState<number>(localStoragePage || 1);

  const onPageSet = (page: number) => {
    setPage(page);
    window.localStorage.setItem("page", JSON.stringify(page));
  };

  const onFilterSet = (filter: string) => {
    onPageSet(1);
    setFilter(filter);
    window.localStorage.setItem("filter", JSON.stringify(filter));
  };

  const { loading, data, error } = useQuery<{
    launchesPast: Launch[];
    lastId: { id: string }[];
  }>(FLIGHT_LIST_QUERY, {
    variables: {
      mission_name: filter,
      offset: (page - 1) * ITEMS_PER_PAGE,
      limit: ITEMS_PER_PAGE,
    },
  });

  const lastId = data?.lastId[0]?.id || "";
  const launches = data?.launchesPast || [];

  const disabledButton =
    launches.map(({ id }) => id).includes(lastId) ||
    launches.length === 0 ||
    !lastId;

  return (
    <div className="flightListRoot">
      <h2>Launch list</h2>
      <FlightListFilters value={filter} onApplyFilters={onFilterSet} />
      {loading ? (
        <MyLoader />
      ) : error ? (
        <MyError />
      ) : (
        <>
          <FlightList onDetailSelect={onDetailSelect} launches={launches} />
          <MyPagination
            nextButtonDisabled={disabledButton}
            value={page}
            onPageChange={onPageSet}
          />
        </>
      )}
    </div>
  );
}
