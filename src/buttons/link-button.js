import React from "react";
import '../buttons/link-button.css';

export const LinkButton = ({
  children,
  href = "#",
  variant = 'text', /* button style variance*/
  color = 'default', /* color variance*/
  className= '',
  target = '_blank', // optional target for external links
  rel = 'noopener noreferrer' // recommended for security
}) => {

  const variantClass = `link-btn-${variant}`;
  const colorClass = `link-btn-${variant}-${color}`;

  const combinedClass = `link-btn ${variantClass} ${colorClass} ${className}`.trim();

  return (
    <div class='link-button-wrapper'>
     <a
      href={href}
      className={combinedClass}
      target={target}
      rel={rel}
      >
     {children}
     </a>
    </div>
  );
};

export default LinkButton;
