import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";
import { FLIGHT_LIST_QUERY } from "./views/FlightList/FlightListPageGraphQL";

const mocks = [
  {
    request: {
      query: FLIGHT_LIST_QUERY,
      variables: {
        mission_name: "",
        offset: 0,
        limit: 7,
      },
    },
    result: {
      data: {
        launchesPast: [
          {
            id: "73",
            launch_date_local: "2018-12-23T08:51:00-05:00",
            launch_site: {
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            mission_name: "GPS III SV01",
            launch_success: true,
            rocket: {
              rocket_name: "Falcon 9",
            },
          },
          {
            id: "97",
            launch_date_local: "2020-06-30T15:55:00-04:00",
            launch_site: {
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            mission_name: "GPS III SV03 (Columbus)",
            launch_success: true,
            rocket: {
              rocket_name: "Falcon 9",
            },
          },
          {
            id: "106",
            launch_date_local: "2020-11-05T18:24:00-05:00",
            launch_site: {
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            mission_name: "GPS III SV04 (Sacagawea)",
            launch_success: true,
            rocket: {
              rocket_name: "Falcon 9",
            },
          },
        ],
        lastId: [
          {
            id: "106",
          },
        ],
      },
    },
  },
];

describe("App", () => {
  test("renders App with mocked data", async () => {
    const { findByText, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
    expect(await findByText("GPS III SV01")).toBeInTheDocument();
  });
});
