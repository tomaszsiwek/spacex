import { useState } from "react";
import MyButton from "components/MyButton";
import "./MySearch.css";

interface MySearchProps {
  onApplyButton: (value: string) => void;
  value?: string;
}

const MySearch: React.FunctionComponent<MySearchProps> = ({
  onApplyButton,
  value,
}) => {
  const [filterValue, setFilterValue] = useState<string>(value);

  const onApply = () => {
    onApplyButton(filterValue);
  };

  return (
    <div className="mySearchRoot">
      <input
        onKeyDown={(e) => e.key === "Enter" && onApply()}
        placeholder="Find mission..."
        className="mySearchInput"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <MyButton
        disabled={value === filterValue}
        onClick={onApply}
        label="Search"
      />
    </div>
  );
};

export default MySearch;
