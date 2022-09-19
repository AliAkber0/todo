import React from "react";

const Input = ({
  className,
  placeholder,
  type,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
