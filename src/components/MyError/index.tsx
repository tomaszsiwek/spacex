import React from "react";
import "./MyError.css";

interface MyErrorProps {}

const MyError: React.FunctionComponent<MyErrorProps> = () => {
  return <div className="myError">Something went wrong</div>;
};

export default MyError;
