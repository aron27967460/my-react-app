import React from "react";
import "./main-content-module.scss";

export const Image = ({
  src = '#',
  alt = '#',
  variant = 'fullspan',
  spacing= '',
  withMargin='true'
}) => {
  const imgWidth = {
    fullspan: 'imgBlock-fullspan',
    inline: 'imgBlock-inline'
  }[variant] || "imgBlock-fullspan";

  return (
    <div className={`${imgWidth} ${spacing} margin-${withMargin}`}>
      <img src={src} alt={alt} className={'img'} />
    </div>
  );
};

export default Image;
