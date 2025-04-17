import React from "react";
import './main-content-module.scss';

export const Header = ({
  children,
  tag = "h1", // just default value, not a union type
  textStyle= "display-large",
  spacing= 'for-content'
}) => {
  const Tag = tag;

  return (
    <Tag className={`text-${textStyle} padding-${spacing}`}>
      {children}
    </Tag>
  );
};

export default Header;
