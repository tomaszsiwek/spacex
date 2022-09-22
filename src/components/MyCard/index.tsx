import React from "react";
import "./MyCard.css";

interface MyCardProps {
  header?: string;
}

const MyCard: React.FunctionComponent<MyCardProps> = ({ header, children }) => {
  return (
    <div className="myCard">
      {header && <h4>{header}</h4>}
      <div className="myCardContainer">{children}</div>
    </div>
  );
};

export default MyCard;
