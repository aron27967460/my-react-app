import React from "react";
import "./main-content-module.scss";

export const Video = ({
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
      <video width="100%" height="auto" autoPlay muted loop playsInline>
            <source src={src} alt={alt} type="video/mp4"/>
              Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
