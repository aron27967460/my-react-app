import React from "react";
import './main-content-module.scss';

export const TextRow = ({
  children,
  textStyle= "body-large",
  textColor= "default",
  spacing= 'for-content'
}) => {

  const combinedClass = `text-${textStyle} color-${textColor}`.trim();

  return (
    <div className={`textBlock padding-${spacing}`}>
      <p className={combinedClass}>
        {children}
      </p>
    </div>
  );
};

export default TextRow;
