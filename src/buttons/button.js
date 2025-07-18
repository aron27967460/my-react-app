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
  type = 'button',
  'aria-label': ariaLabel, // allow passing this explicitly
  title,
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

  // Warn in dev if icon-only and no accessible label
  if (process.env.NODE_ENV !== 'production' && isIconOnly && !ariaLabel && !title) {
    console.warn(
      'Button: Icon-only buttons must have an accessible label (use aria-label or title).'
    );
  }

  // Compose visual label
  const visualLabel = (
    <>
      {compoundLabel && (
        <span className="compoundLabel">{compoundLabel} |</span>
      )}
      <span className="btn-label">{children}</span>
    </>
  );

  return (
    <button
      type={type}
      className={`btn ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={isIconOnly ? ariaLabel || title || iconName : undefined}
      title={isIconOnly ? title || ariaLabel || iconName : undefined}
      {...rest}
    >
      <span className="focus-layer">
      {resolvedIcon && iconPosition === 'left' && (
        <span className={`btn-icon ${!isIconOnly ? 'icon-left' : ''}`}>{resolvedIcon}</span>
      )}
      {!isIconOnly && visualLabel}
      {resolvedIcon && iconPosition === 'right' && (
        <span className={`btn-icon ${!isIconOnly ? 'icon-right' : ''}`}>{resolvedIcon}</span>
      )}
      </span>
    </button>
  );
};

export default Button;
