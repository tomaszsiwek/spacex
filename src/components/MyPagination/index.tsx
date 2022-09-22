import MyButton from "components/MyButton";
import "./MyPagination.css";

interface MyPaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
  value: number;
}

const MyPagination: React.FunctionComponent<MyPaginationProps> = ({
  totalPages,
  value,
  onPageChange,
}) => {
  if (!(totalPages > 0)) return null;
  const nextPageHandle = () => {
    onPageChange(++value);
  };

  const prevPageHandle = () => {
    onPageChange(--value);
  };

  const pageInputHandle = (value: string) => {
    onPageChange(Number(value));
  };

  const pagesArray = Array.from(Array(totalPages + 1).keys());
  pagesArray.shift();

  return (
    <div className="myPaginationRoot">
      <MyButton disabled={value <= 1} onClick={prevPageHandle} label="<" />
      <select
        className="myPaginationSelect"
        onChange={(e) => pageInputHandle(e.target.value)}
        value={value}
      >
        {pagesArray.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <span>of {totalPages}</span>
      <MyButton
        disabled={value >= totalPages}
        onClick={nextPageHandle}
        label=">"
      />
    </div>
  );
};

export default MyPagination;
