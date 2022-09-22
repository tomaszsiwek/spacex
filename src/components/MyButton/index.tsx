import React from "react";
import "./MyButton.css";

interface MyButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const MyButton: React.FunctionComponent<MyButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`myButton ${className}`}
    >
      {label}
    </button>
  );
};

export default MyButton;
