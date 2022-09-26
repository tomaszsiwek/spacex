import React from "react";
import "./MyButton.css";

interface MyButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const MyButton: React.FunctionComponent<MyButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button disabled={disabled} onClick={onClick} className="myButton">
      {label}
    </button>
  );
};

export default MyButton;
