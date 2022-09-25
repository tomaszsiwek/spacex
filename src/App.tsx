import { useState } from "react";
import FlightListPageGraphQL from "views/FlightList/FlightListPageGraphQL";
import FlightDetailsPage from "views/FlightDetails/FlightDetailsPage";

function App() {
  const [selectedFlight, setSelectedFlight] = useState<string | null>();
  return (
    <>
      <h1>SpaceX App</h1>
      {!selectedFlight ? (
        <FlightListPageGraphQL
          onDetailSelect={(value) => setSelectedFlight(value)}
        />
      ) : (
        <FlightDetailsPage
          id={selectedFlight}
          onBackClick={() => setSelectedFlight(null)}
        />
      )}
    </>
  );
}

export default App;
