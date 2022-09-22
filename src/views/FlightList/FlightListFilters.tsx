import MySearch from "components/MySearch";

type Props = {
  onApplyFilters: (value: string) => void;
  value: string;
};

export default function FlightListFilters({ onApplyFilters, value }: Props) {
  return <MySearch value={value} onApplyButton={onApplyFilters} />;
}
