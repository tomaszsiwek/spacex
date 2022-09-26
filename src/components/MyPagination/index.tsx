import MyButton from "components/MyButton";
import "./MyPagination.css";

interface MyPaginationProps {
  totalPages?: number;
  onPageChange: (page: number) => void;
  value: number;
  nextButtonDisabled?: boolean;
}

const MyPagination: React.FunctionComponent<MyPaginationProps> = ({
  totalPages,
  value,
  onPageChange,
  nextButtonDisabled,
}) => {
  const nextPageHandle = () => {
    onPageChange(++value);
  };

  const prevPageHandle = () => {
    onPageChange(--value);
  };

  const pageInputHandle = (value: string) => {
    onPageChange(Number(value));
  };

  let selectElement = null;
  if (totalPages) {
    const pagesArray = Array.from(Array(totalPages + 1).keys());
    pagesArray.shift();
    selectElement = (
      <>
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
      </>
    );
  }

  return (
    <div className="myPaginationRoot">
      <MyButton disabled={value <= 1} onClick={prevPageHandle} label="<" />
      {selectElement}
      <MyButton
        disabled={nextButtonDisabled}
        onClick={nextPageHandle}
        label=">"
      />
    </div>
  );
};

export default MyPagination;
