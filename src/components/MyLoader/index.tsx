import React from "react";
import "./MyLoader.css";

interface MyLoaderProps {}

const MyLoader: React.FunctionComponent<MyLoaderProps> = () => {
  return <div className="myLoader">Loading...</div>;
};

export default MyLoader;
