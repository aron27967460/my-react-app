import React from "react";
import '../buttons/button.css';

export const Button = ({
  children,
  variant= 'outline'
}) => {
  const variantClass ={
    outline: 'btn-outline',
    text:'btn-text',
    underline: 'btn-underline',
    elevated: 'btn-elevated'
  }[variant];

  return(
    <button
      className={`btn ${variantClass}`}
    >
    {children}
    </button>
  );
};

export default Button;
