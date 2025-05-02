import React from "react";
import '../buttons/button.css';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';
import { ReactComponent as ArrowRightIcon } from '../assets/icons/arrowRight.svg';
import { ReactComponent as ArrowUpIcon } from '../assets/icons/arrowUp.svg';
import { ReactComponent as AddIcon } from '../assets/icons/add.svg';

export const Button = ({
  children,
  variant = 'outline',
  compoundLabel = '',
  icon = null,
  iconName,
  iconPosition = 'left', // 'left' | 'right'
  className = '',
  onClick,
  disabled = false,
  ...rest
}) => {
  const variantClass = {
    outline: 'btn-outline',
    text: 'btn-text',
    underline: 'btn-underline',
    elevated: 'btn-elevated'
  }[variant];

  const presetIcons = {
    star: <StarIcon />,
    add: <AddIcon />,
    arrowRight: <ArrowRightIcon />,
    arrowUp: <ArrowUpIcon />
  };

  const resolvedIcon = icon || (iconName && presetIcons[iconName]);

  const isIconOnly = resolvedIcon && !children && !compoundLabel;

  return (
    <button
      className={`btn ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {resolvedIcon && iconPosition === 'left' && (
        <span className="btn-icon icon-left">
          {resolvedIcon}
        </span>
      )}
      {compoundLabel && (
        <span className="compoundLabel">{compoundLabel} |</span>
      )}
      <span className="btn-label">{children}</span>
      {resolvedIcon && iconPosition === 'right' && (
        <span className="btn-icon icon-right">
          {resolvedIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
